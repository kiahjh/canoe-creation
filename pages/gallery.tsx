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
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores error
          aspernatur ratione blanditiis id odit architecto, nam fugiat eum aliquid dolorum
          quia placeat modi nobis quaerat, tempore illum repellat? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Blanditiis dicta ab voluptates asperiores
          suscipit rerum."
          slug="river-schools"
          title="River schools"
          images={images.riverSchools}
        />
        <Section
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores error
          aspernatur ratione blanditiis id odit architecto, nam fugiat eum aliquid dolorum
          quia placeat modi nobis quaerat, tempore illum repellat? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Blanditiis dicta ab voluptates asperiores
          suscipit rerum."
          slug="pollywogs"
          title="Pollywog floats"
          images={images.pollywogs}
        />
        <Section
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores error
          aspernatur ratione blanditiis id odit architecto, nam fugiat eum aliquid dolorum
          quia placeat modi nobis quaerat, tempore illum repellat? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Blanditiis dicta ab voluptates asperiores
          suscipit rerum."
          slug="river-rangers"
          title="River rangers"
          images={images.riverRangers}
        />
        <Section
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores error
          aspernatur ratione blanditiis id odit architecto, nam fugiat eum aliquid dolorum
          quia placeat modi nobis quaerat, tempore illum repellat? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Blanditiis dicta ab voluptates asperiores
          suscipit rerum."
          slug="rappelling"
          title="Rappelling"
          images={images.rappelling}
        />
        <Section
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores error
          aspernatur ratione blanditiis id odit architecto, nam fugiat eum aliquid dolorum
          quia placeat modi nobis quaerat, tempore illum repellat? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Blanditiis dicta ab voluptates asperiores
          suscipit rerum."
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
