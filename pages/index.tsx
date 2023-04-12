import React from 'react';
import Image from 'next/image';
import NavLink from '../components/NavLink';
import IslandImage from '../public/island.jpg';
import MainHeader from '../components/MainHeader';
import HeroBlock from '../components/HeroBlock';
import Waves from '../components/Waves';

const Home: React.FC = () => {
  return (
    <main className="">
      <MainHeader />
      <HeroBlock />
      <div className="z-10 relative mt-96">
        <Waves />
        <div className="h-176 bg-cyan-600"></div>
      </div>
    </main>
  );
};

export default Home;
