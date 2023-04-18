import React from 'react';
import cx from 'classnames';
import {
  ArrowRightCircleIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import EVENTS, { Event } from '../lib/events';
import { summerMonths } from '../lib/dates';
import Link from 'next/link';
import { useIntersectionObserver } from '../lib/hooks';

const Calendar: React.FC = () => {
  return (
    <div className="lg+:grid lg+:grid-cols-3 lg+:gap-8 space-y-4 lg+:space-y-0">
      {summerMonths.map((month) => (
        <div className="bg-emerald-50 p-4 rounded-xl" key={month}>
          <h3 className="font-black text-2xl bg-gradient-to-r from-emerald-700 to-emerald-600 w-min bg-clip-text text-transparent mb-4">
            {month}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg+:flex lg+:flex-col lg+:space-y-4">
            {EVENTS.filter((event) => event.dateRange[0].includes(month)).map((event) => {
              return <EventCard event={event} key={event.dateRange[0]} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;

interface Props {
  event: Event;
}

const EventCard: React.FC<Props> = ({ event }) => {
  const { intersected, ref } = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.9,
  });

  let badgeColors = '';
  switch (event.status) {
    case 'open':
      badgeColors = 'bg-emerald-100 text-emerald-600';
      break;
    case 'full':
      badgeColors = 'bg-red-100 text-red-800';
      break;
    case 'private':
      badgeColors = 'bg-yellow-100 text-yellow-600';
      break;
  }

  return (
    <div
      className={cx(
        'bg-white shadow rounded-xl flex flex-col relative overflow-hidden transition duration-200',
        intersected ? 'opacity-100' : 'opacity-0 translate-y-2 scale-75',
      )}
      ref={ref}
    >
      <div className="w-full h-full absolute top-0 left-0 bg-white/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center group">
        <Link
          href="#"
          className="flex items-center bg-emerald-100 px-6 py-3 rounded-full text-emerald-700 font-medium hover:bg-emerald-200 opacity-0 group-hover:opacity-100 transition duration-500 translate-y-4 group-hover:translate-y-0 shadow-sm"
        >
          <ArrowRightCircleIcon className="h-6 mr-2" />
          Find out more
        </Link>
      </div>
      <div className="flex justify-between items-start p-4 pb-2">
        <div className="mr-8">
          <h4 className="capitalize text-xl font-bold">
            {event.title || event.type.replace(/_/g, ` `)}
          </h4>
          {event.title && (
            <h5 className="capitalize font-medium text-slate-600">
              {event.type.replace(/_/g, ` `)}
            </h5>
          )}
        </div>
        <span
          className={cx(
            badgeColors,
            `px-4 rounded-full flex justify-center items-center py-0.5 text-sm uppercase font-medium`,
          )}
        >
          {event.status}
        </span>
      </div>
      <div className="flex flex-col space-y-1 p-4 pt-2">
        <span className="font-medium text-slate-800 flex items-center">
          <CalendarDaysIcon className="h-6 text-slate-800 mr-2" />
          {event.dateRange[0]}
          {event.numDays > 1 && ` - ${event.dateRange[1]}`}
        </span>
        {event.costPerPerson && (
          <span className="font-medium text-slate-800 flex items-center">
            <CurrencyDollarIcon className="h-6 text-slate-800 mr-2" />$
            {event.costPerPerson} per person
          </span>
        )}
        <span className="font-medium text-slate-800 flex items-center">
          <UsersIcon className="h-6 text-slate-800 mr-2" />
          Ages {event.ageRange[0]} to {event.ageRange[1]}
        </span>
      </div>
      {(event.location || event.specialNotes) && (
        <div className="p-4 pt-2 flex justify-between italic text-sm text-slate-500">
          <span className="mr-6">{event.specialNotes && event.specialNotes}</span>
          <span>{event.location && event.location}</span>
        </div>
      )}
    </div>
  );
};
