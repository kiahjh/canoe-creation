import React from 'react';
import cx from 'classnames';
import Sparkle from './Sparkle';
import { useScrollY } from '../lib/hooks';
import Button from './Button';
import Image, { StaticImageData } from 'next/image';

import CamperSterningImage from '../public/river-schools/camper-sterning.jpg';
import RiverDramaShotImage from '../public/river-schools/river-drama-shot.jpg';
import PurplePimplebacksImage from '../public/river-schools/purple-pimplebacks.jpg';
import IslandImage from '../public/river-schools/island.jpg';
import FoggyCanoesImage from '../public/river-schools/foggy-canoes.jpg';
import CanoeAwayImage from '../public/river-schools/canoe-away.jpg';
import SwimmingPollywogsImage from '../public/pollywogs/swimming-pollywogs.jpg';
import RappellingDescentImage from '../public/rappelling/rappelling-descent.jpg';
import GoingOverEdgeImage from '../public/rappelling/going-over-edge.jpg';
import WaterfallImage from '../public/little-solomons/waterfall.jpg';

const HeroBlock: React.FC = () => {
  const scrollY = useScrollY();

  return (
    <div className="px-8 sm:px-12 pt-12 sm:pt-20 flex items-center justify-center z-0 fixed w-full">
      <div className="absolute -bottom-128 lg:-bottom-96 w-full h-152 hidden sm:block">
        <MasonryImageColumn
          style={{ bottom: `-${scrollY / 5}px` }}
          images={[CamperSterningImage, RiverDramaShotImage, CanoeAwayImage]}
          className="absolute px-2 h-[640px] md:h-[600px] w-1/3 md:w-1/4 lg:w-1/5 left-0"
          padding="!pl-3 md:!pl-4"
        />
        <div className="hidden md:block">
          <MasonryImageColumn
            style={{ bottom: `-${scrollY / 10}px` }}
            images={[FoggyCanoesImage, PurplePimplebacksImage, CamperSterningImage]}
            className="absolute px-2 h-128 lg:h-112 w-1/4 lg:w-1/5 left-[25%] lg:left-[20%]"
          />
        </div>
        <div className="hidden lg:block">
          <MasonryImageColumn
            style={{ bottom: `0px` }}
            images={[IslandImage, RappellingDescentImage, CamperSterningImage]}
            className="absolute px-2 h-80 w-1/4 lg:w-1/5 left-[40%]"
          />
        </div>
        <MasonryImageColumn
          style={{ bottom: `-${scrollY / 10}px` }}
          images={[GoingOverEdgeImage, WaterfallImage, CamperSterningImage]}
          className="absolute px-2 h-[580px] md:h-112 w-1/3 md:w-1/4 lg:w-1/5 left-[33.333%] md:left-[50%] lg:left-[60%]"
        />
        <MasonryImageColumn
          style={{ bottom: `-${scrollY / 5}px` }}
          images={[WaterfallImage, SwimmingPollywogsImage, CamperSterningImage]}
          className="absolute px-2 h-[640px] md:h-96 lg:h-[600px] w-1/3 md:w-1/4 lg:w-1/5 right-0"
          padding="!pr-3 md:!pr-4"
        />
      </div>
      <div
        className="flex flex-col justify-center items-center relative pointer-events-none"
        style={{
          opacity: `${1 - scrollY / 400}`,
          transform: `translateY(${-scrollY / 4}px)`,
        }}
      >
        <div className="absolute left-0 w-full h-full" style={{ top: scrollY / 8 }}>
          <Sparkle
            size={20}
            position={'right-10 bottom-24'}
            className="block sm:hidden xl:block"
            color={'yellow'}
          />
          <Sparkle
            size={28}
            position={'right-4 bottom-32'}
            className="block sm:hidden xl:block"
            color={'emerald'}
          />
          <Sparkle
            size={28}
            position={'left-10 bottom-20'}
            className="block sm:hidden xl:block"
            color={'yellow'}
          />
          <Sparkle
            size={20}
            position={'left-4 2xl:-left-12 bottom-32'}
            className="block sm:hidden xl:block"
            color={'emerald'}
          />
          <Sparkle size={16} position={'-top-6 left-40'} color={'emerald'} />
          <Sparkle size={22} position={'-top-12 left-48'} color={'cyan'} />
          <Sparkle
            size={20}
            position={'-top-16 right-48'}
            color={'yellow'}
            className="sm:block hidden"
          />
        </div>
        <h1
          className={cx(
            'font-raleway text-4xl xs:text-5xl sm:text-6xl lg:text-7xl max-w-3xl text-center relative',
          )}
          style={{ lineHeight: '1.2em' }}
        >
          Explore God&apos;s glory through{' '}
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            Creation
          </span>
        </h1>
        <div className="mt-6 lg:mt-10 md:space-x-4 relative flex md:flex-row flex-col space-y-4 md:space-y-0 w-full max-w-sm md:w-auto md:max-w-none">
          <Button
            type="link"
            to="https://www.youtube.com/watch?v=iJgqtlZu6g8"
            color="primary"
            size="lg"
            icon="video-camera"
            shadow
            sizeOverride="font-medium xs:text-lg px-6 lg:px-8 py-3 lg:py-4"
            className="pointer-events-auto"
            openInNewTab
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
            className="pointer-events-auto"
          >
            View programs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;

interface MasonryImageColumnProps {
  images: StaticImageData[];
  className?: string;
  style?: React.CSSProperties;
  padding?: string;
}

const MasonryImageColumn: React.FC<MasonryImageColumnProps> = ({
  images,
  className,
  style,
  padding,
}) => {
  return (
    <div
      className={cx('px-1.5 lg:px-2 flex flex-col gap-3 lg:gap-4', padding, className)}
      style={style}
    >
      {images.concat(images).map((image, index) => (
        <Image
          key={image.src + index}
          src={image}
          alt={'Canoe creation event'}
          className="rounded-xl lg:rounded-2xl xl:rounded-3xl aspect-[3/2] object-cover"
        />
      ))}
      <div
        className={cx(
          'bg-gradient-to-b from-white via-white/70 to-white/20 absolute w-full h-full left-0 px-1.5 lg:px-2 flex flex-col gap-3 lg:gap-4',
          padding,
        )}
      >
        {images.concat(images).map((image, index) => (
          <Image
            key={image.src + index}
            src={image}
            alt={'Canoe creation event'}
            className="rounded-xl lg:rounded-2xl xl:rounded-3xl aspect-[3/2] object-cover opacity-0 hover:opacity-100 hover:scale-[102%] transition duration-[400ms]"
          />
        ))}
      </div>
    </div>
  );
};
