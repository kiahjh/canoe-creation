import React from 'react';
import cx from 'classnames';
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import Sparkle from './Sparkle';
import { useScrollY } from '../lib/hooks';
import Button from './Button';

const raleway = Raleway({ subsets: ['latin'], weight: '800' });

const HeroBlock: React.FC = () => {
  const scrollY = useScrollY();

  return (
    <div className="px-8 sm:px-12 pt-12 sm:pt-20 flex items-center justify-center z-0 fixed w-full">
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
            'text-4xl xs:text-5xl sm:text-6xl lg:text-7xl max-w-3xl text-center relative',
          )}
          style={{ lineHeight: '1.2em' }}
        >
          Experience His glory through{' '}
          <span className="bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
            Creation
          </span>
        </h1>
        <div className="mt-6 lg:mt-10 md:space-x-4 relative flex md:flex-row flex-col space-y-4 md:space-y-0 w-full max-w-sm md:w-auto md:max-w-none">
          <Button
            type="button"
            onClick={() => {}}
            color="primary"
            size="lg"
            icon="video-camera"
            shadow
            sizeOverride="font-medium xs:text-lg px-6 lg:px-8 py-3 lg:py-4"
          >
            Watch the video
          </Button>
          <Button
            type="link"
            to="/programs"
            color="secondary"
            size="lg"
            icon="arrow-circle-right"
            shadow
            sizeOverride="font-medium xs:text-lg px-6 lg:px-8 py-3 lg:py-4"
          >
            View programs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
