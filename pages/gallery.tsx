import React from "react";
import type { GetStaticProps } from "next";
import Chrome from "../components/Chrome";
import Carousel from "../components/Carousel";
import getImages from "../lib/get-images";
import Button from "../components/Button";
import Sparkle from "../components/Sparkle";

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    images: {
      riverSchools: getImages(`**/public/river-schools/*.jpg`),
      pollywogs: getImages(`**/public/pollywogs/*.jpg`),
      riverRangers: getImages(`**/public/river-rangers/*.jpg`),
      littleSolomons: getImages(`**/public/little-solomons/*.jpg`),
      rappelling: getImages(`**/public/rappelling/*.jpg`),
    },
  },
});

interface Props {
  images: {
    riverSchools: string[];
    pollywogs: string[];
    riverRangers: string[];
    littleSolomons: string[];
    rappelling: string[];
  };
}

const Gallery: React.FC<Props> = ({ images }) => (
  <Chrome
    page="/gallery"
    title="Canoe Creation | Gallery"
    description="Photos from past and recent trips led by Canoe Creation."
  >
    <div className="py-12 sm:py-20 flex flex-col">
      <h1 className="font-raleway text-4xl mx-4 sm:text-5xl text-center relative self-center">
        Canoe Creation{` `}
        <span className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-transparent">
          gallery
        </span>
        <Sparkle
          size={20}
          position={`-right-12 -top-4`}
          color={`yellow`}
          className="hidden sm:block"
        />
        <Sparkle
          size={20}
          position={`-left-12 bottom-0`}
          color={`cyan`}
          className="hidden sm:block"
        />
        <Sparkle
          size={20}
          position={`-left-4 -bottom-6`}
          color={`yellow`}
          className="hidden sm:block"
        />
      </h1>
      <div className="mt-8 sm:mt-16 flex flex-col gap-8">
        <Section
          description="Here are the premier trips for young people who want to delve deep in study of creation and honor God in the process. These day and overnight adventures take you down a corridor of praise to the Creator and put in your hands, hearts, and minds the wonders of wildlife and wild places."
          slug="river-schools"
          title="River schools"
          images={images.riverSchools}
        />
        <Section
          description="A river starter trip for kids ages 8 to 10 introduces them to a world of fun and faith. They learn canoe skills along with cool ways to learn about fish, birds, flowers, mussels, trees, etc. Water games and mini-studies of creation get them hooked on canoeing creation."
          slug="pollywogs"
          title="Pollywog floats"
          images={images.pollywogs}
        />
        <Section
          description="Whether standing in the flow and feeling the force of the river's current or racing toward a net to capture stream fish, this is the program for pre-teens (11-13) that will excite and invite them into the adventure of getting into God's handiwork. Studying, capturing, and looking at the details of other living things shows each of us how carefully designed God's world is. Time alone with their Creator and His Word is built in."
          slug="river-rangers"
          title="River rangers"
          images={images.riverRangers}
        />
        <Section
          description="A journey to the cliffs wakes up the wild wonder of your heart. Beautiful scenes and trust-building experiences like rappelling and rock climbing bring us to appreciate the Creator in more ways than just the fun of it."
          slug="rappelling"
          title="Rappelling"
          images={images.rappelling}
        />
        <Section
          description="In these classes, children learn about our wonderful God through the wonders He has made. They will spend time exploring the plants, birds, and creek critters of Creation; journaling and sketching about the wild wonders they discover; learning to sing of our marvelous, loving Make; and enjoying games and fun with the leaders."
          slug="little-solomons"
          title="Little Solomon classes"
          images={images.littleSolomons}
        />
      </div>
    </div>
  </Chrome>
);

export default Gallery;

interface SectionProps {
  title: string;
  description: string;
  slug: string;
  images: string[];
}

const Section: React.FC<SectionProps> = ({
  images,
  title,
  description,
  slug,
}) => (
  <div className="bg-slate-100 rounded-3xl px-6 xs:px-8 xl:px-12 2xl:px-16 pt-16 xs:pt-12 pb-4 lg:mx-4 relative">
    <h2 className="text-3xl xs:text-4xl text-slate-800 font-bold">{title}</h2>
    <p className="mt-4 text-slate-600 max-w-6xl text-sm xs:text-base">
      {description}
    </p>
    <Carousel images={images} className="mt-8" />
    <Button
      type="link"
      to={`/programs/${slug}`}
      color="secondary"
      className="absolute right-4 top-4 !bg-emerald-200/70 !text-emerald-700 hover:!bg-emerald-200"
      size="sm"
      icon="arrow-circle-right"
    >
      Find out more
    </Button>
  </div>
);
