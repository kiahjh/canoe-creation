import cx from "classnames";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import type { NewsfeedPost } from "../lib/types";
import { useIntersectionObserver } from "../lib/hooks";
import RiverSchoolImage from "../public/river-schools/island.jpg";
import PollywogImage from "../public/pollywogs/paddling-pollywogs.jpg";
import RappellingImage from "../public/rappelling/rappelling-descent.jpg";
import Sparkle from "./Sparkle";
import FeaturedProgram from "./FeaturedProgram";
import Arrow from "./Arrow";
import Button from "./Button";

interface Props {
  mostRecentNewsfeedPost: NewsfeedPost;
}

const InfoBlock: React.FC<Props> = ({ mostRecentNewsfeedPost }) => {
  const { intersected: missionIntersected, ref: missionRef } =
    useIntersectionObserver({
      rootMargin: `0px`,
      threshold: 0.7,
    });

  return (
    <div className="bg-gradient-to-b from-[#08A0b2] to-emerald-500 relative p-6 xs:p-8 sm:p-12">
      <div className="bg-[#20b3c5] p-3 rounded-3xl flex justify-between lg:items-center flex-col lg:flex-row">
        <div className="flex items-center mr-8 mb-8 lg:mb-0">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 mr-6 flex justify-center items-center shrink-0">
            <MegaphoneIcon className="h-7 text-cyan-800" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-cyan-100 font-medium">From the Canews Feed:</h4>
            <h3 className="text-xl sm:text-2xl font-inter text-white">
              {mostRecentNewsfeedPost.title}
            </h3>
          </div>
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
              `bg-white shadow-xl rounded-3xl transition duration-700 sticky top-12 lg+:w-128 shrink-0 overflow-hidden`,
              missionIntersected
                ? `opacity-100`
                : `lg+:opacity-0 lg+:translate-y-4`,
            )}
            ref={missionRef}
          >
            <Sparkle
              size={20}
              position={`right-10 bottom-72 lg+:block hidden`}
              color={`yellow`}
            />
            <Sparkle
              size={28}
              position={`right-4 bottom-80 lg+:block hidden`}
              color={`emerald`}
            />
            <Sparkle
              size={18}
              position={`right-32 top-4 lg+:block hidden`}
              color={`yellow`}
            />
            <div className="relative p-6 xs:p-8 sm:p-10">
              <h2
                className={cx(
                  `text-3xl sm:text-4xl font-black relative font-raleway`,
                )}
              >
                Our mission
              </h2>
              <p className="mt-2 sm:mt-4 sm:text-lg leading-7 sm:leading-8 text-slate-700 relative">
                Canoe Creation exists to declare the glory of God by studying
                His works in creation and discipling youth in their Christian
                faith. Floating classrooms led by expert instructor/guides
                instill academic excellence, while teaching critical thinking.
                Rappelling adventures, retreats and classes for young children
                provide families with wholesome learning, fun and opportunity to
                encounter their Creator.
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
            fadeIn
            slug="river-schools"
            priceRange={{ min: 60, max: 140 }}
            ageRange={{ min: 12, max: 20 }}
            title={`River schools`}
            description={`Here are the premier trips for young people who want to delve deep in study of creation and honor God in the process. These day and overnight adventures take you down a corridor of praise to the Creator and put in your hands, hearts, and minds the wonders of wildlife and wild places.`}
            image={RiverSchoolImage.src}
          />
          <FeaturedProgram
            fadeIn
            slug="pollywogs"
            priceRange={{ min: 45, max: 90 }}
            ageRange={{ min: 8, max: 12 }}
            title={`Pollywog floats`}
            description={`A river starter trip for kids ages 8 to 10 introduces them to a world of fun and faith. They learn canoe skills along with cool ways to learn about fish, birds, flowers, mussels, trees, etc. Water games and mini-studies of creation get them hooked on canoeing creation.`}
            image={PollywogImage.src}
          />
          <FeaturedProgram
            fadeIn
            slug="rappelling"
            priceRange={{ min: 70, max: null }}
            ageRange={{ min: 12, max: null }}
            title={`Rappelling`}
            description={`A journey to the cliffs wakes up the wild wonder of your heart. Beautiful scenes and trust-building experiences like rappelling and rock climbing bring us to appreciate the Creator in more ways than just the fun of it.`}
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
