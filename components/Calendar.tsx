import React from "react";
import type { CCEvent } from "../lib/types";
import { months, summerMonths } from "../lib/dates";
import EventCard from "./EventCard";

interface Props {
  events: CCEvent[];
}

const Calendar: React.FC<Props> = ({ events }) => (
  <div className="lg+:grid lg+:grid-cols-3 lg+:gap-8 space-y-4 lg+:space-y-0">
    {summerMonths.map((month) => (
      <div className="bg-emerald-50 p-4 rounded-3xl" key={month}>
        <h3 className="font-black text-2xl bg-gradient-to-r from-emerald-700 to-emerald-600 w-min bg-clip-text text-transparent mb-4">
          {month}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg+:flex lg+:flex-col lg+:space-y-2">
          {events
            .filter(
              (event) =>
                months[new Date(event.dateRange[0]).getMonth()] === month,
            )
            .map((event) => (
              <EventCard event={event} key={event.dateRange[0]} />
            ))}
        </div>
      </div>
    ))}
  </div>
);

export default Calendar;
