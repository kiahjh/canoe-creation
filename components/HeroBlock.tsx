import React from 'react';
import cx from 'classnames';

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
import Image from 'next/image';
import Button from './Button';
import Sparkle from './Sparkle';

const HeroBlock: React.FC = () => {
  return (
    <div className="flex flex-col lg+:flex-row pb-16 bg-gradient-to-b from-white to-slate-50 pt-12">
      <div className="pl-8 lg:pl-16 xl:pl-24 pt-4 sm:pt-8 lg+:pt-20 xl:pt-20 pr-8 lg:pr-16 xl:pr-16 pb-20 lg+:pb-24 shrink-0 flex flex-col items-center lg+:items-start">
        <h1 className="text-4xl xs:text-5xl md:text-6xl 2xl:text-7xl font-raleway text-center lg+:text-left max-w-2xl lg+:max-w-xl 2xl:max-w-3xl !leading-tight relative">
          <Sparkle
            size={24}
            position={'-left-8 -top-6 hidden md:block'}
            color={'yellow'}
          />
          <Sparkle size={18} position={'-left-16 top-4 hidden md:block'} color={'cyan'} />
          <Sparkle
            size={24}
            position={'right-8 bottom-8 hidden md:block'}
            color={'emerald'}
          />
          <Sparkle
            size={16}
            position={'right-0 bottom-0 hidden md:block'}
            color={'yellow'}
          />
          <Sparkle
            size={18}
            position={'right-20 -bottom-2 hidden md:block'}
            color={'yellow'}
          />
          <Sparkle
            size={16}
            position={'right-56 -top-20 hidden lg+:block'}
            color={'emerald'}
          />
          <Sparkle
            size={18}
            position={'right-40 -top-12 hidden md:block'}
            color={'yellow'}
          />
          <Sparkle
            size={16}
            position={'left-20 -bottom-4 hidden md:block'}
            color={'yellow'}
          />
          <span className="relative">
            Explore God&apos;s glory through{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Creation
            </span>
          </span>
        </h1>
        <h3 className="text-center lg+:text-left max-w-2xl lg+:max-w-xl 2xl:max-w-3xl mt-6 text-lg 2xl:text-xl text-slate-500 leading-loose">
          Canoeing beautiful rivers, rappelling 120-foot cliffs, primitive camping on
          islands, and so much more. Come join us this summer for the adventure of a
          lifetime, and see the character of our Creator through it all!
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center self-stretch sm:self-auto mt-8 xl:mt-12 gap-4">
          <Button type="link" color="primary" shadow size="lg" to="" icon="video-camera">
            Watch the video
          </Button>
          <Button
            type="link"
            color="secondary"
            shadow
            size="lg"
            to=""
            icon="arrow-circle-right"
            className="!bg-emerald-100 !text-emerald-700 hover:!bg-emerald-200"
          >
            View programs
          </Button>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow p-8 relative rounded-3xl bg-emerald-100 my-8 lg:my-12 mx-4 xs:mx-8 lg:mx-16 flex flex-col md:flex-row items-center h-72 lg+:h-auto">
          <Image
            src={IslandImage}
            alt={'Island'}
            className="w-full md:w-3/4 lg+:w-full h-[120%] lg+:h-full object-cover rounded-3xl shadow-xl absolute left-0 lg+:-left-12 top-[-10%] lg+:-top-8"
          />
          <div className="absolute mx-4 md:right-8 lg+:-right-8 -bottom-32 md:-bottom-20 lg+:-bottom-8 bg-white rounded-2xl p-4 lg:p-6 shadow-xl max-w-lg">
            <h4 className="text-xl font-bold">River schools</h4>
            <p className="text-slate-600 mt-2 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laborum
              nobis eveniet saepe iure sint placeat at. Necessitatibus quam maxime.
            </p>
            <div className="flex justify-end">
              <Button
                type="link"
                color="secondary"
                size="sm"
                to=""
                icon="arrow-circle-right"
                className="mt-4"
              >
                Find out more
              </Button>
            </div>
          </div>
        </div>
        <div className="mr-8 flex justify-center items-center gap-4 mt-32 md:mt-20 lg:mt-16 lg+:mt-4">
          <div className="w-3 h-3 bg-slate-200 rounded-full shadow-inner hover:bg-slate-300 transition duration-100 hover:scale-110 cursor-pointer" />
          <div className="w-3 h-3 bg-slate-200 rounded-full shadow-inner hover:bg-slate-300 transition duration-100 hover:scale-110 cursor-pointer" />
          <div className="w-3 h-3 bg-slate-200 rounded-full shadow-inner hover:bg-slate-300 transition duration-100 hover:scale-110 cursor-pointer" />
          <div className="w-3 h-3 bg-slate-200 rounded-full shadow-inner hover:bg-slate-300 transition duration-100 hover:scale-110 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
