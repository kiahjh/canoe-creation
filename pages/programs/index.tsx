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
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, ullamcorper nisl eget, ultricies nisl.'
            }
            ageRange={{
              min: 12,
              max: 20,
            }}
            priceRange={{
              min: 65,
              max: 140,
            }}
            image={IslandImage.src}
          />
          <FeaturedProgram
            title={'Rappelling'}
            slug={'rappelling'}
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, ullamcorper nisl eget, ultricies nisl.'
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
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero euismod, ullamcorper nisl eget, ultricies nisl.'
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
