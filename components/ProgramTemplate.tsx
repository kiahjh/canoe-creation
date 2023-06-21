import React from 'react';
import cx from 'classnames';
import {
  CalendarDaysIcon,
  CurrencyDollarIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Chrome from './Chrome';
import Button from './Button';
import { formatAgeRange } from '../lib/strings';
import { CCEvent } from '../lib/types';
import EventCard from './EventCard';

interface Props {
  title: string;
  page: string;
  paragraph1: string;
  paragraph2?: string;
  quote?: {
    text: string;
    cite: string;
  };
  numDaysRange: {
    min: number;
    max: number;
  };
  ageRange: {
    min: number | null;
    max: number | null;
  };
  priceRange: {
    min: number;
    max: number | null;
  };
  images: string[];
  events: CCEvent[];
}

const ProgramTemplate: React.FC<Props> = ({
  title,
  paragraph1,
  paragraph2,
  quote,
  page,
  numDaysRange,
  ageRange,
  priceRange,
  images,
  events,
}) => {
  return (
    <Chrome page={page}>
      <main className="flex flex-col lg:flex-row">
        <div className="flex-grow py-12 sm:py-16 px-4 xs:px-8 sm:px-12 lg+:px-16">
          <h1 className="text-4xl sm:text-5xl font-raleway w-fit text-slate-950">
            {title}
          </h1>
          <div className="mt-4 mb-6 flex gap-2 flex-wrap">
            <div className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1">
              <CalendarDaysIcon className="h-5 text-slate-500" />
              <span className="text-slate-500 text-sm">
                {numDaysRange.min}
                {numDaysRange.max !== numDaysRange.min && `-${numDaysRange.max}`} day
                {numDaysRange.max !== 1 && 's'}
              </span>
            </div>
            <div className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1">
              <UsersIcon className="h-5 text-slate-500" />
              <span className="text-slate-500 text-sm">
                {formatAgeRange(ageRange.min, ageRange.max)}
              </span>
            </div>
            <div className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1">
              <CurrencyDollarIcon className="h-5 text-slate-500" />
              <span className="text-slate-500 text-sm">{`$${priceRange.min}${
                priceRange.max ? `-$${priceRange.max}` : ``
              } / person`}</span>
            </div>
          </div>
          <p className="text-slate-500 text-lg leading-8">{paragraph1}</p>
          {quote && (
            <div className="mb-12 mt-16 bg-white rounded-3xl relative">
              <div className="w-14 h-14 bg-emerald-400 rounded-full absolute left-4 xs:-left-5 -top-8 xs:-top-5 flex justify-center items-center">
                <UserIcon className="h-7 text-white" />
              </div>
              <div className="p-8 pb-6 border border-b-0 border-slate-200 rounded-t-3xl bg-emerald-50/10">
                <p className="text-xl text-slate-500 font-medium">{quote.text}</p>
              </div>
              <div className="px-8 py-4 flex justify-end bg-emerald-100 rounded-b-3xl">
                <span className="text-lg font-semibold text-emerald-600 italic">
                  - {quote.cite}
                </span>
              </div>
            </div>
          )}
          <p className="text-slate-500 text-lg leading-8">{paragraph2}</p>
          <div className="mt-16 py-6 px-4 xs:py-8 xs:px-8 bg-emerald-50 rounded-3xl">
            <h3 className="text-2xl font-inter text-emerald-900">Events this year:</h3>
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 mt-4">
              {events.map((e) => (
                <EventCard event={e} />
              ))}
            </div>
          </div>
        </div>
        <div
          className={cx(
            'lg:w-112 lg+:w-128 xl:w-152 2xl:w-176 mt-0 lg:mt-16 ml-4 xs:ml-8 sm:ml-12 mr-4 xs:mr-8 sm:mr-12 lg:mr-8 lg:ml-0 xl:ml-8 m-8 rounded-3xl shrink-0 lg:self-start',
            images.length > 0 && `bg-slate-100 `,
          )}
        >
          {images.length > 0 && (
            <div className="p-4 xs:p-6 lg+:p-8">
              {images[0] && (
                <div
                  className="h-52 sm:h-72 lg:h-52 lg+:h-72 bg-center bg-cover rounded-3xl hover:scale-[102%] hover:shadow-lg transition duration-200 cursor-pointer"
                  style={{ backgroundImage: `url(${images[0]})` }}
                />
              )}
              {images.length > 1 && (
                <div className="flex gap-2 xs:gap-4 xl:gap-8 mt-2 xs:mt-4 xl:mt-8">
                  <div
                    className={cx(
                      'bg-center bg-cover rounded-3xl hover:scale-[102%] hover:shadow-lg transition duration-200 cursor-pointer',
                      images.length === 2
                        ? `h-52 sm:h-72 lg:h-52 lg+:h-72 w-full`
                        : `h-40 sm:h-52 lg:h-40 xl:h-64 w-1/2`,
                    )}
                    style={{ backgroundImage: `url(${images[1]})` }}
                  />
                  {images[2] && (
                    <div
                      className="h-40 sm:h-52 lg:h-40 xl:h-64 w-1/2 bg-center bg-cover rounded-3xl hover:scale-[102%] hover:shadow-lg transition duration-200 cursor-pointer"
                      style={{ backgroundImage: `url(${images[2]})` }}
                    />
                  )}
                </div>
              )}
              {images.length > 3 && (
                <div className="flex justify-center mt-8">
                  <Button
                    type="button"
                    onClick={() => {}}
                    color="secondary"
                    size="sm"
                    icon="grid"
                    className="!bg-emerald-200/60 hover:!bg-emerald-200"
                  >
                    See more
                  </Button>
                </div>
              )}
            </div>
          )}
          <div className="sm:p-6 lg+:p-8">
            <div className="bg-slate-100 sm:bg-slate-50 rounded-b-3xl sm:rounded-t-3xl p-4 xs:p-6 lg+p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Want to register or just have a question?
              </h3>
              <p className="mt-3 text-slate-500 max-w-md">
                Feel free to reach out! We will do our best to get back to you within 3
                business days.
              </p>
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-slate-500 font-medium">
                    Name
                  </label>
                  <input
                    className="px-6 py-4 w-full rounded-2xl border border-slate-200 focus:border-emerald-400 outline outline-transparent focus:outline-emerald-400 transition duration-200 placeholder-slate-400"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-slate-500 font-medium">
                    Email address
                  </label>
                  <input
                    className="px-6 py-4 w-full rounded-2xl border border-slate-200 focus:border-emerald-400 outline outline-transparent focus:outline-emerald-400 transition duration-200 placeholder-slate-400"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="me@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-slate-500 font-medium">
                    Message
                  </label>
                  <textarea
                    className="px-6 py-4 w-full rounded-2xl border border-slate-200 focus:border-emerald-400 outline outline-transparent focus:outline-emerald-400 transition duration-200 placeholder-slate-400"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Any questions or comments are welcome!"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={() => {}}
                    color="primary"
                    size="md"
                    icon="arrow-circle-right"
                  >
                    Send message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Chrome>
  );
};

export default ProgramTemplate;
