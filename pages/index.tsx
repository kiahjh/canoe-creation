import React from 'react';
import MainHeader from '../components/MainHeader';
import HeroBlock from '../components/HeroBlock';
import Waves from '../components/Waves';
import InfoBlock from '../components/InfoBlock';

const Home: React.FC = () => {
  return (
    <main className="">
      <MainHeader />
      <HeroBlock />
      <div className="z-10 relative mt-96">
        <Waves />
        <InfoBlock />
      </div>
    </main>
  );
};

export default Home;
