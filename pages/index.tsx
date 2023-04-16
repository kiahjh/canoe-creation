import React from 'react';
import MainHeader from '../components/MainHeader';
import HeroBlock from '../components/HeroBlock';
import Waves from '../components/Waves';
import InfoBlock from '../components/InfoBlock';
import CalendarBlock from '../components/CalendarBlock';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <main className="">
    <MainHeader />
    <HeroBlock />
    <div className="z-10 relative mt-[380px] xs:mt-[440px] md:mt-96">
      <div className="overflow-hidden">
        <Waves className="w-[190%] xs:w-[150%] sm:w-full" />
      </div>
      <InfoBlock />
      <CalendarBlock />
      <Footer />
    </div>
  </main>
);

export default Home;
