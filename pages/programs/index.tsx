import React from 'react';
import Chrome from '../../components/Chrome';
import FeaturedProgram from '../../components/FeaturedProgram';

import IslandImage from '../../public/river-schools/island.jpg';
import RappellingDescentImage from '../../public/rappelling/rappelling-descent.jpg';
import BurmaImage from '../../public/river-rangers/burma.jpg';
import PaddlingPollywogsImage from '../../public/pollywogs/paddling-pollywogs.jpg';
import WaterfallImage from '../../public/little-solomons/waterfall.jpg';
import Sparkle from '../../components/Sparkle';

const Programs: React.FC = () => {
  return (
    <Chrome page="/programs">
      <div className="py-12 lg:py-20 px-4 xs:px-6 sm:px-12 lg:px-16 2xl:px-20 bg-gradient-to-b from-white via-cyan-50 to-emerald-50">
        <div className="flex justify-center px-8">
          <h1 className="text-center text-4xl md:text-5xl font-raleway relative">
            <Sparkle
              size={16}
              position={'right-8 -bottom-6'}
              color={'emerald'}
              className="hidden sm:block"
            />
            <Sparkle
              size={16}
              position={'-right-8 bottom-6'}
              color={'cyan'}
              className="hidden sm:block"
            />
            <Sparkle
              size={24}
              position={'-left-12 -top-2'}
              color={'emerald'}
              className="hidden sm:block"
            />
            <Sparkle
              size={16}
              position={'-left-4 -top-8'}
              color={'yellow'}
              className="hidden sm:block"
            />
            Canoe Creation Programs
          </h1>
        </div>
        <div className="mt-8 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-8">
          <FeaturedProgram
            title={'River Schools'}
            slug={'river-schools'}
            description={
              'Here are the premier trips for young people who want to delve deep in study of creation and honor God in the process. These day and overnight adventures take you down a corridor of praise to the Creator and put in your hands, hearts, and minds the wonders of wildlife and wild places.'
            }
            ageRange={{
              min: 12,
              max: 20,
            }}
            priceRange={{
              min: 60,
              max: 140,
            }}
            image={IslandImage.src}
          />
          <FeaturedProgram
            title={'Rappelling'}
            slug={'rappelling'}
            description={
              'A journey to the cliffs wakes up the wild wonder of your heart. Beautiful scenes and trust-building experiences like rappelling and rock climbing bring us to appreciate the Creator in more ways than just the fun of it.'
            }
            ageRange={{
              min: 12,
              max: null,
            }}
            priceRange={{
              min: 70,
              max: null,
            }}
            image={RappellingDescentImage.src}
          />
          <FeaturedProgram
            title={'River Rangers'}
            slug={'river-rangers'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, ullamcorper nisl eget, ultricies nisl.'
            }
            ageRange={{
              min: 11,
              max: 13,
            }}
            priceRange={{
              min: 65,
              max: null,
            }}
            image={BurmaImage.src}
          />
          <FeaturedProgram
            title={'Pollywog Floats'}
            slug={'pollywogs'}
            description={
              'A river starter trip for kids ages 8 to 10 introduces them to a world of fun and faith. They learn canoe skills along with cool ways to learn about fish, birds, flowers, mussels, trees, etc. Water games and mini-studies of creation get them hooked on canoeing creation.'
            }
            ageRange={{
              min: 8,
              max: 12,
            }}
            priceRange={{
              min: 45,
              max: 90,
            }}
            image={PaddlingPollywogsImage.src}
          />
          <FeaturedProgram
            title={'Little Solomons'}
            slug={'little-solomons'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, ullamcorper nisl eget, ultricies nisl.'
            }
            ageRange={{
              min: 5,
              max: 10,
            }}
            priceRange={{
              min: 36,
              max: null,
            }}
            image={WaterfallImage.src}
          />
        </div>
      </div>
    </Chrome>
  );
};

export default Programs;
