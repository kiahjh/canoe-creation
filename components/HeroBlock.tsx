import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Raleway } from 'next/font/google';

const inter = Raleway({ subsets: ['latin'], weight: '800' });

interface Props {}

const HeroBlock: React.FC<Props> = ({}) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    console.log('scrollY', scrollY);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className="px-12 pt-20 items-center justify-center z-0 fixed w-full">
      <div
        className="flex flex-col justify-center items-center relative"
        style={{
          opacity: `${1 - scrollY / 400}`,
          transform: `translateY(${-scrollY / 4}px)`,
        }}
      >
        <h1
          className={cx(inter.className, 'text-7xl max-w-3xl text-center leading-tight')}
        >
          Experience His glory through{' '}
          <span className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-transparent">
            Creation
          </span>
        </h1>
        <div className="mt-10 space-x-4">
          <button className="bg-cyan-500 text-white font-medium text-lg shadow-lg shadow-cyan-500/30 px-6 py-4 rounded-full inline-flex items-center transition duration-150 hover:bg-cyan-600">
            <i className="mr-3 fa-brands fa-youtube text-xl" />
            Watch the video
          </button>
          <button className="bg-cyan-50 text-cyan-600 font-medium text-lg shadow-lg shadow-black/5 px-6 py-4 rounded-full inline-flex items-center transition duration-150 hover:bg-cyan-100">
            <i className="mr-3 fa-solid fa-arrow-right text-xl" />
            View programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
