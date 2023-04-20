import React from 'react';
import Chrome from '../components/Chrome';
import { GetStaticProps } from 'next';
import { getAllEvents } from '../lib/getObjects';
import { CCEvent } from '../lib/types';

export const getStaticProps: GetStaticProps<Props> = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
  };
};

interface Props {
  events: CCEvent[];
}

const Calendar: React.FC<Props> = ({ events }) => {
  return (
    <Chrome page="/calendar">
      <Calendar events={events} />
    </Chrome>
  );
};

export default Calendar;
