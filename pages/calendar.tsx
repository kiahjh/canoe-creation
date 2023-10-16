import React from "react";
import type { GetStaticProps } from "next";
import type { CCEvent } from "../lib/types";
import Chrome from "../components/Chrome";
import CalendarBlock from "../components/CalendarBlock";
import { getAllEvents } from "../lib/getObjects";
import ContactForm from "../components/ContactForm";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const events = await getAllEvents();
  return {
    props: { events },
  };
};

interface Props {
  events: CCEvent[];
}

const Calendar: React.FC<Props> = ({ events }) => (
  <Chrome
    page="/calendar"
    title="Canoe Creation | Calendar"
    description="Canoe Creation's schedule of events for the season."
  >
    <CalendarBlock events={events} />
    <section className="flex justify-center items-center pb-20 xs:pb-20 sm:pb-20 pt-0 sm:pt-6 p-0 xs:p-8 sm:p-12 relative">
      <div className="w-full lg:w-3/4 h-1/2 absolute lg:rounded-3xl bg-emerald-50" />
      <ContactForm className="bg-slate-50 p-6 sm:p-8 xs:rounded-3xl w-full md:w-176 relative bg-opacity-80 backdrop-blur-3xl xs:shadow-xl" />
    </section>
  </Chrome>
);

export default Calendar;
