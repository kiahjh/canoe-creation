import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import Sparkle from './Sparkle';

const raleway = Raleway({ subsets: ['latin'], weight: '800' });

const HeroBlock: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className="px-12 pt-20 flex items-center justify-center z-0 fixed w-full">
      <div
        className="flex flex-col justify-center items-center relative"
        style={{
          opacity: `${1 - scrollY / 400}`,
          transform: `translateY(${-scrollY / 4}px)`,
        }}
      >
        <div className="absolute left-0 w-full h-full" style={{ top: scrollY / 8 }}>
          <Sparkle size={20} position={'right-10 bottom-24'} color={'yellow'} />
          <Sparkle size={28} position={'right-4 bottom-32'} color={'emerald'} />
          <Sparkle size={28} position={'left-10 bottom-20'} color={'yellow'} />
          <Sparkle size={20} position={'left-20 bottom-12'} color={'cyan'} />
          <Sparkle size={20} position={'-left-12 bottom-32'} color={'emerald'} />
          <Sparkle size={16} position={'left-10 bottom-2'} color={'emerald'} />
          <Sparkle size={16} position={'-top-6 left-40'} color={'emerald'} />
          <Sparkle size={22} position={'-top-12 left-48'} color={'cyan'} />
          <Sparkle size={20} position={'-top-24 right-48'} color={'yellow'} />
        </div>
        <h1
          className={cx(
            raleway.className,
            'text-7xl max-w-3xl text-center leading-tight relative',
          )}
        >
          Experience His glory through{' '}
          <span className="bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
            Creation
          </span>
        </h1>
        <div className="mt-10 space-x-4 relative">
          <Link
            href="/"
            className="bg-emerald-500 text-white font-medium text-lg shadow-lg shadow-emerald-500/30 px-8 py-4 rounded-full cursor-pointer inline-flex items-center transition duration-150 hover:bg-emerald-600"
          >
            <i className="mr-3 fa-brands fa-youtube text-xl" />
            Watch the video
          </Link>
          <Link
            href="/"
            className="bg-emerald-50 text-emerald-600 font-medium text-lg shadow-lg shadow-black/5 px-8 py-4 rounded-full cursor-pointer inline-flex items-center transition duration-150 hover:bg-emerald-100"
          >
            <i className="mr-3 fa-solid fa-arrow-right text-xl" />
            View programs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
