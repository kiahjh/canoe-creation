import cx from 'classnames';

import { Raleway, Inter } from 'next/font/google';
import { useIntersectionObserver } from '../lib/hooks';
import Sparkle from './Sparkle';
import IslandImage from '../public/island.jpg';
import CampsiteImage from '../public/campsite.jpg';
import RappellingImage from '../public/rappelling.jpg';
import FeaturedProgram from './FeaturedProgram';
import Arrow from './Arrow';
import Link from 'next/link';
import { ArrowRightCircleIcon, ListBulletIcon } from '@heroicons/react/24/outline';

const raleway = Raleway({ subsets: ['latin'], weight: '800' });

interface Props {}

const InfoBlock: React.FC<Props> = ({}) => {
  const { intersected: missionIntersected, ref: missionRef } = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.7,
  });

  return (
    <div className="bg-gradient-to-b from-cyan-600 to-emerald-500 relative -mt-24 p-6 xs:p-8 sm:p-12 flex flex-col lg+:flex-row items-stretch lg+:space-x-12 space-y-8 sm:space-y-12 lg+:space-y-0">
      <div>
        <div
          className={cx(
            'bg-white shadow-xl rounded-2xl transition duration-700 sticky top-12 lg+:w-128 shrink-0 overflow-hidden',
            missionIntersected ? 'opacity-100' : 'lg+:opacity-0 lg+:translate-y-4',
          )}
          ref={missionRef}
        >
          <Sparkle
            size={20}
            position={'right-10 bottom-64 lg+:block hidden'}
            color={'yellow'}
          />
          <Sparkle
            size={28}
            position={'right-4 bottom-72 lg+:block hidden'}
            color={'emerald'}
          />
          <Sparkle
            size={18}
            position={'right-32 top-4 lg+:block hidden'}
            color={'yellow'}
          />
          <div className="relative p-6 xs:p-8 sm:p-10">
            <h2
              className={cx(
                'text-3xl sm:text-4xl font-black relative',
                raleway.className,
              )}
            >
              Our mission
            </h2>
            <p className="mt-2 sm:mt-4 sm:text-lg leading-7 sm:leading-8 text-slate-700 relative">
              Canoe Creation exists to declare the glory of God by studying His works in
              creation and discipling youth in their Christian faith. Floating classrooms
              led by expert instructor/guides instill academic excellence, while teaching
              critical thinking. Rappelling adventures, retreats and classes for young
              children provide families with wholesome learning, fun and opportunity to
              encounter their Creator.
            </p>
          </div>
          <div className="bg-emerald-50 p-10 rounded-b-xl flex flex-col items-center">
            <h3 className="text-2xl font-bold text-emerald-600 text-center">
              Check out some of our featured programs!
            </h3>
            <Arrow className="h-40 -mt-8 -mb-10 hidden lg+:block" />
            <div className="lg+:hidden">
              <i className="fa-solid fa-arrow-down text-4xl text-emerald-600 mt-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center flex-grow space-y-8 sm:space-y-12">
        <FeaturedProgram
          slug="river-schools"
          price={60}
          ageRange={[8, 18]}
          name={'River schools'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus quia autem nobis in possimus eaque est quo qui veniam! Delectus, voluptatem voluptatum nisi explicabo ducimus aliquam eos mollitia impedit.'
          }
          img={IslandImage.src}
        />
        <FeaturedProgram
          slug="wilderness-camps"
          price={80}
          ageRange={[12, 16]}
          name={'Wilderness camps'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus quia autem nobis in possimus eaque est quo qui veniam! Delectus, voluptatem voluptatum nisi explicabo ducimus aliquam eos mollitia impedit.'
          }
          img={CampsiteImage.src}
        />
        <FeaturedProgram
          slug="rappelling"
          price={120}
          ageRange={[14, 25]}
          name={'Rappelling'}
          description={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus quia autem nobis in possimus eaque est quo qui veniam! Delectus, voluptatem voluptatum nisi explicabo ducimus aliquam eos mollitia impedit.'
          }
          img={RappellingImage.src}
        />
        <Link
          href="/programs"
          className="bg-emerald-50 text-emerald-600 font-medium text-lg shadow-lg shadow-black/5 px-8 py-4 rounded-full cursor-pointer inline-flex items-center transition duration-150 hover:bg-emerald-100"
        >
          <ArrowRightCircleIcon className="h-6 mr-2" />
          View all programs
        </Link>
      </div>
    </div>
  );
};

export default InfoBlock;
