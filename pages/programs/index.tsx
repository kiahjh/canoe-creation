import React from "react";
import Chrome from "../../components/Chrome";
import FeaturedProgram from "../../components/FeaturedProgram";

import IslandImage from "../../public/river-schools/island.jpg";
import RappellingDescentImage from "../../public/rappelling/rappelling-descent.jpg";
import BurmaImage from "../../public/river-rangers/burma.jpg";
import PaddlingPollywogsImage from "../../public/pollywogs/paddling-pollywogs.jpg";
import WaterfallImage from "../../public/little-solomons/waterfall.jpg";
import Sparkle from "../../components/Sparkle";
import PlanYourOwnTripBlock from "../../components/PlanYourOwnTripBlock";

const Programs: React.FC = () => (
  <Chrome
    page="/programs"
    title="Canoe Creation | Programs"
    description="A full list of all of Canoe Creation's offered programs."
  >
    <div className="py-12 lg:py-20 px-4 xs:px-6 sm:px-12 lg:px-16 2xl:px-20 bg-gradient-to-b from-white via-cyan-50 to-emerald-50">
      <div className="flex flex-col items-center px-4 sm:px-8">
        <h1 className="text-center text-4xl md:text-5xl font-raleway relative">
          <Sparkle
            size={16}
            position={`right-8 -bottom-6`}
            color={`emerald`}
            className="hidden sm:block"
          />
          <Sparkle
            size={16}
            position={`-right-8 bottom-6`}
            color={`cyan`}
            className="hidden sm:block"
          />
          <Sparkle
            size={24}
            position={`-left-12 -top-2`}
            color={`emerald`}
            className="hidden sm:block"
          />
          <Sparkle
            size={16}
            position={`-left-4 -top-8`}
            color={`yellow`}
            className="hidden sm:block"
          />
          Canoe Creation Programs
        </h1>
        <p className="mt-6 sm:mt-12 text-slate-500 text-center max-w-5xl">
          Ever felt the fascination of a toad vibrating in your hand? Ever
          wander through lush spring flowers and feel like there really is hope?
          Ever wonder about not just the names of trees, but of their character?
          Ever sit alongside a stream and have cares of this world washed from
          you? Ever revel in the power of a storm because you know the One that
          made it? Ever think about spending some time in a quiet place the way
          Jesus did? Come wander, wonder, study, and be still with us to behold
          our Great Creator and learn of Him.
        </p>
      </div>
      <div className="mt-8 md:mt-20 grid grid-cols-1 xl:grid-cols-2 gap-8">
        <FeaturedProgram
          title={`River Schools`}
          slug={`river-schools`}
          description={`Here are the premier trips for young people who want to delve deep in study of creation and honor God in the process. These day and overnight adventures take you down a corridor of praise to the Creator and put in your hands, hearts, and minds the wonders of wildlife and wild places.`}
          ageRange={{
            min: 12,
            max: 20,
          }}
          priceRange={{
            min: 60,
            max: 140,
          }}
          image={IslandImage}
        />
        <FeaturedProgram
          title={`Rappelling`}
          slug={`rappelling`}
          description={`A journey to the cliffs wakes up the wild wonder of your heart. Beautiful scenes and trust-building experiences like rappelling and rock climbing bring us to appreciate the Creator in more ways than just the fun of it.`}
          ageRange={{
            min: 12,
            max: null,
          }}
          priceRange={{
            min: 75,
            max: null,
          }}
          image={RappellingDescentImage}
        />
        <FeaturedProgram
          title={`River Rangers`}
          slug={`river-rangers`}
          description={`Whether standing in the flow and feeling the force of the river's current or racing toward a net to capture stream fish, this is the program for pre-teens (11-13) that will excite and invite them into the adventure of getting into God's handiwork. Studying, capturing, and looking at the details of other living things shows each of us how carefully designed God's world is. Time alone with their Creator and His Word is built in.`}
          ageRange={{
            min: 11,
            max: 13,
          }}
          priceRange={{
            min: 45,
            max: null,
          }}
          image={BurmaImage}
        />
        <FeaturedProgram
          title={`Pollywog Floats`}
          slug={`pollywogs`}
          description={`A river starter trip for kids ages 8 to 10 introduces them to a world of fun and faith. They learn canoe skills along with cool ways to learn about fish, birds, flowers, mussels, trees, etc. Water games and mini-studies of creation get them hooked on canoeing creation.`}
          ageRange={{
            min: 8,
            max: 10,
          }}
          priceRange={{
            min: 45,
            max: 90,
          }}
          image={PaddlingPollywogsImage}
        />
        <FeaturedProgram
          title={`Little Solomons`}
          slug={`little-solomons`}
          description={`In these classes, children learn about our wonderful God through the wonders He has made. They will spend time exploring the plants, birds, and creek critters of Creation; journaling and sketching about the wild wonders they discover; learning to sing of our marvelous, loving Make; and enjoying games and fun with the leaders.`}
          ageRange={{
            min: 4,
            max: 8,
          }}
          priceRange={{
            min: 7,
            max: null,
          }}
          image={WaterfallImage}
        />
      </div>
    </div>
    <PlanYourOwnTripBlock />
  </Chrome>
);

export default Programs;
