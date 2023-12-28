import React, { useEffect, useState } from "react";
import cx from "classnames";

import Image from "next/image";
import NextBgImage from "next-bg-image";
import type { StaticImageData } from "next/image";
import IslandImage from "../public/river-schools/island.jpg";
import BgPicture from "../public/river-schools/river-drama-shot.jpg";
import SwimmingPollywogsImage from "../public/pollywogs/swimming-pollywogs.jpg";
import RappellingDescentImage from "../public/rappelling/rappelling-descent.jpg";
import CottonwoodFuzziesImage from "../public/river-rangers/cottonwood-fuzzies.jpg";
import WaterfallImage from "../public/little-solomons/waterfall.jpg";
import { formatAgeRange } from "../lib/strings";
import Button from "./Button";

const HeroBlock: React.FC = () => {
  const [curImageIndex, setCurImageIndex] = useState(0);
  const [hasBeenInteracted, setHasBeenInteracted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!hasBeenInteracted) {
        if (curImageIndex === 4) setCurImageIndex(0);
        else setCurImageIndex(curImageIndex + 1);
      }
    }, 6000);
    return () => clearTimeout(id);
  }, [curImageIndex, hasBeenInteracted]);

  return (
    <NextBgImage
      as="section"
      src={[`linear-gradient(to bottom, white, #ffffffe5)`, BgPicture]}
      position="center"
      size="cover"
      className="flex flex-col lg+:flex-row pb-16 pt-12 overflow-hidden"
    >
      <div className="pl-8 lg:pl-16 xl:pl-24 pt-4 sm:pt-8 lg+:pt-20 xl:pt-20 pr-8 lg:pr-16 xl:pr-16 pb-20 lg+:pb-24 shrink-0 flex flex-col items-center lg+:items-start">
        <h1 className="text-4xl xs:text-5xl md:text-6xl 2xl:text-7xl font-raleway text-center lg+:text-left max-w-2xl lg+:max-w-xl 2xl:max-w-3xl !leading-tight relative">
          <span className="relative">
            Explore God&apos;s Glory Through{` `}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Creation
            </span>
          </span>
        </h1>
        <h3 className="text-center lg+:text-left max-w-2xl lg+:max-w-xl 2xl:max-w-3xl mt-6 text-lg 2xl:text-xl text-slate-500 leading-8">
          Canoeing beautiful rivers, rappelling 120-foot cliffs, primitive
          camping on islands, and so much more. Come join us this summer for the
          adventure of a lifetime, and see the character of our Creator through
          it all!
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center self-stretch sm:self-auto mt-8 xl:mt-12 gap-4">
          <Button
            type="link"
            color="primary"
            shadow
            size="lg"
            to="https://www.youtube.com/watch?v=iJgqtlZu6g8"
            icon="video-camera"
            openInNewTab
          >
            Watch the video
          </Button>
          <Button
            type="link"
            color="secondary"
            shadow
            size="lg"
            to="/programs"
            icon="arrow-circle-right"
            className="!bg-emerald-100 !text-emerald-700 hover:!bg-emerald-200"
          >
            View programs
          </Button>
        </div>
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow p-8 relative rounded-3xl bg-emerald-400/20 my-8 lg:my-12 mx-4 xs:mx-8 lg:mx-16 flex flex-col md:flex-row items-center h-72 lg+:h-auto">
          <ProgramFeature
            index={0}
            curIndex={curImageIndex}
            img={IslandImage}
            title={`River Schools`}
            slug={`river-schools`}
            description={`These day and overnight adventures take you down a corridor of praise to the Creator and put in your hands, hearts, and minds the wonders of wildlife and wild places.`}
            ageRange={{ min: 12, max: 20 }}
          />
          <ProgramFeature
            index={1}
            curIndex={curImageIndex}
            img={RappellingDescentImage}
            title={`Rappelling`}
            slug={`rappelling`}
            description={`A journey to the cliffs wakes up the wonder of your heart. Beautiful scenes and trust-building experiences like rappelling and rock climbing bring us to appreciate the Creator.`}
            ageRange={{ min: 12, max: null }}
          />
          <ProgramFeature
            index={2}
            curIndex={curImageIndex}
            img={CottonwoodFuzziesImage}
            title={`River Rangers`}
            slug={`river-rangers`}
            description={`Program for pre-teens (11-13) that will excite and invite them into the adventure of getting into God's handiwork.`}
            ageRange={{ min: 11, max: 13 }}
          />
          <ProgramFeature
            index={3}
            curIndex={curImageIndex}
            img={SwimmingPollywogsImage}
            title={`Pollywog Floats`}
            slug={`pollywogs`}
            description={`A river starter trip for kids ages 8 to 10 introduces them to a world of fun and faith.`}
            ageRange={{ min: 8, max: 10 }}
          />
          <ProgramFeature
            index={4}
            curIndex={curImageIndex}
            img={WaterfallImage}
            title={`Little Solomon Classes`}
            slug={`little-solomons`}
            description={`In these classes, children learn about our wonderful God through the wonders He has made.`}
            ageRange={{ min: 5, max: 10 }}
          />
        </div>
        <div className="mr-8 flex justify-center items-center gap-4 mt-32 md:mt-20 lg:mt-16 lg+:mt-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <IndexSwitcher
              key={i}
              index={i}
              curIndex={curImageIndex}
              setCurrentIndex={setCurImageIndex}
              setHasBeenInteracted={setHasBeenInteracted}
            />
          ))}
        </div>
      </div>
    </NextBgImage>
  );
};

export default HeroBlock;

interface ProgramFeatureProps {
  index: number;
  curIndex: number;
  img: StaticImageData;
  title: string;
  slug: string;
  description: string;
  ageRange: {
    min: number;
    max: number | null;
  };
}

const ProgramFeature: React.FC<ProgramFeatureProps> = ({
  index,
  curIndex,
  img,
  title,
  slug,
  description,
  ageRange,
}) => (
  <>
    <Image
      src={img}
      alt={`Canoe Creation fun`}
      className={cx(
        `w-full md:w-3/4 lg+:w-full h-[120%] lg+:h-full object-cover rounded-3xl shadow-xl absolute left-0 lg+:-left-12 top-[-10%] lg+:-top-8 transition-[transform,left,opacity] duration-500`,
        index < curIndex && `!scale-50 !opacity-0`,
        index > curIndex && `!left-[50em] !opacity-0`,
      )}
      style={{
        zIndex: index * 10,
      }}
      loading="eager"
    />
    <div
      className={cx(
        `absolute mx-4 md:right-8 lg+:-right-8 -bottom-32 md:-bottom-20 lg+:-bottom-8 bg-white rounded-2xl p-4 lg:p-6 shadow-xl max-w-lg transition-[opacity,transform,right] duration-[600ms] shrink-0`,
        index < curIndex && `!opacity-0 !scale-50`,
        index > curIndex && `!right-[-50em] !opacity-0`,
      )}
      style={{
        zIndex: index * 10 + 1,
      }}
    >
      <div className="flex justify-between items-start gap-4">
        <h4 className="text-xl font-bold">{title}</h4>
        <span className="text-sm text-slate-500">
          {formatAgeRange(ageRange.min, ageRange.max)}
        </span>
      </div>
      <p className="text-slate-600 mt-2 text-sm lg:text-base">{description}</p>
      <div className="flex justify-end">
        <Button
          type="link"
          color="secondary"
          size="sm"
          to={`/programs/${slug}`}
          icon="arrow-circle-right"
          className="mt-4"
        >
          Find out more
        </Button>
      </div>
    </div>
  </>
);

interface IndexSwitcherProps {
  index: number;
  curIndex: number;
  setCurrentIndex: (index: number) => void;
  setHasBeenInteracted: (hasBeenInteracted: boolean) => void;
}

const IndexSwitcher: React.FC<IndexSwitcherProps> = ({
  index,
  curIndex,
  setCurrentIndex,
  setHasBeenInteracted,
}) => (
  <button
    onClick={() => {
      setCurrentIndex(index);
      setHasBeenInteracted(true);
    }}
    className={cx(
      `w-3 h-3 rounded-full hover:bg-slate-300 shadow-inner transition duration-100 hover:scale-110 cursor-pointer`,
      index === curIndex
        ? `bg-slate-400 hover:!bg-slate-400`
        : `bg-slate-500/10`,
    )}
  />
);
