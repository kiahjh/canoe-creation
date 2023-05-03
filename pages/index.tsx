import React from 'react';
import { GetStaticProps } from 'next';
import type { CCEvent } from '../lib/types';
import MainHeader from '../components/MainHeader';
import HeroBlock from '../components/HeroBlock';
import Waves from '../components/Waves';
import InfoBlock from '../components/InfoBlock';
import CalendarBlock from '../components/CalendarBlock';
import Footer from '../components/Footer';
import { getAllEvents } from '../lib/getObjects';

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

const Home: React.FC<Props> = ({ events }) => (
  <main className="">
    <MainHeader page={'/'} />
    <HeroBlock />
    <div className="z-10 relative mt-[380px] xs:mt-[440px] md:mt-96">
      <div className="overflow-hidden flex">
        <Waves className="w-[190%] xs:w-[150%] sm:w-full xl:w-3/4 shrink-0" />
        <Waves className="w-3/4 shrink-0 mt-[16px]" />
      </div>
      <InfoBlock />
      <CalendarBlock events={events} />
      <Footer />
    </div>
  </main>
);

export default Home;
