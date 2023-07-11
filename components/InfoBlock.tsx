import cx from 'classnames';
import { useIntersectionObserver } from '../lib/hooks';
import Sparkle from './Sparkle';
import RiverSchoolImage from '../public/river-schools/island.jpg';
import PollywogImage from '../public/pollywogs/paddling-pollywogs.jpg';
import RappellingImage from '../public/rappelling/rappelling-descent.jpg';
import FeaturedProgram from './FeaturedProgram';
import Arrow from './Arrow';
import Button from './Button';
import { NewsfeedPost } from '../lib/types';
import { MegaphoneIcon } from '@heroicons/react/24/outline';

interface Props {
  mostRecentNewsfeedPost: NewsfeedPost;
}

const InfoBlock: React.FC<Props> = ({ mostRecentNewsfeedPost }) => {
  const { intersected: missionIntersected, ref: missionRef } = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.7,
  });

  return (
    <div className="bg-gradient-to-b from-cyan-600 to-emerald-500 relative -mt-24 p-6 xs:p-8 sm:p-12">
      <div className="bg-cyan-500/70 p-3 rounded-3xl flex justify-between lg:items-center flex-col lg:flex-row">
        <div className="flex items-center mr-8 mb-8 lg:mb-0">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 mr-6 flex justify-center items-center shrink-0">
            <MegaphoneIcon className="h-7 text-cyan-800" />
          </div>
          <h3 className="text-xl sm:text-2xl font-inter text-white">
            {mostRecentNewsfeedPost.title}
          </h3>
        </div>
        <Button
          type="link"
          to={`/newsfeed`}
          color="secondary"
          size="md"
          icon="arrow-circle-right"
          className="self-end lg:self-center !bg-cyan-200/20 !text-white hover:!bg-cyan-200/30"
        >
          Read announcement
        </Button>
      </div>
      <div className="flex flex-col lg+:flex-row items-stretch lg+:space-x-12 space-y-8 sm:space-y-12 lg+:space-y-0 mt-12">
        <div>
          <div
            className={cx(
              'bg-white shadow-xl rounded-3xl transition duration-700 sticky top-12 lg+:w-128 shrink-0 overflow-hidden',
              missionIntersected ? 'opacity-100' : 'lg+:opacity-0 lg+:translate-y-4',
            )}
            ref={missionRef}
          >
            <Sparkle
              size={20}
              position={'right-10 bottom-72 lg+:block hidden'}
              color={'yellow'}
            />
            <Sparkle
              size={28}
              position={'right-4 bottom-80 lg+:block hidden'}
              color={'emerald'}
            />
            <Sparkle
              size={18}
              position={'right-32 top-4 lg+:block hidden'}
              color={'yellow'}
            />
            <div className="relative p-6 xs:p-8 sm:p-10">
              <h2 className={cx('text-3xl sm:text-4xl font-black relative font-raleway')}>
                Our mission
              </h2>
              <p className="mt-2 sm:mt-4 sm:text-lg leading-7 sm:leading-8 text-slate-700 relative">
                Canoe Creation exists to declare the glory of God by studying His works in
                creation and discipling youth in their Christian faith. Floating
                classrooms led by expert instructor/guides instill academic excellence,
                while teaching critical thinking. Rappelling adventures, retreats and
                classes for young children provide families with wholesome learning, fun
                and opportunity to encounter their Creator.
              </p>
            </div>
            <div className="bg-emerald-50 p-10 rounded-2xl flex flex-col items-center m-4">
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
            priceRange={{ min: 65, max: 140 }}
            ageRange={{ min: 12, max: 20 }}
            title={'River schools'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus quia autem nobis in possimus eaque est quo qui veniam! Delectus, voluptatem voluptatum nisi explicabo ducimus aliquam eos mollitia impedit.'
            }
            image={RiverSchoolImage.src}
          />
          <FeaturedProgram
            slug="pollywogs"
            priceRange={{ min: 45, max: 90 }}
            ageRange={{ min: 8, max: 12 }}
            title={'Pollywog floats'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus quia autem nobis in possimus eaque est quo qui veniam! Delectus, voluptatem voluptatum nisi explicabo ducimus aliquam eos mollitia impedit.'
            }
            image={PollywogImage.src}
          />
          <FeaturedProgram
            slug="rappelling"
            priceRange={{ min: 70, max: null }}
            ageRange={{ min: 12, max: null }}
            title={'Rappelling'}
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ducimus quia autem nobis in possimus eaque est quo qui veniam! Delectus, voluptatem voluptatum nisi explicabo ducimus aliquam eos mollitia impedit.'
            }
            image={RappellingImage.src}
          />
          <Button
            type="link"
            to="/programs"
            color="secondary"
            size="lg"
            icon="arrow-circle-right"
            shadow
          >
            View all programs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
