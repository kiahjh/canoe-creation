import React from 'react';
import Chrome from '../components/Chrome';
import { GetStaticProps } from 'next';
import Carousel from '../components/Carousel';
import getImages from '../lib/get-images';
import Button from '../components/Button';

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      images: {
        riverSchools: getImages('**/public/river-schools/*.jpg'),
        pollywogs: getImages('**/public/pollywogs/*.jpg'),
        riverRangers: getImages('**/public/river-rangers/*.jpg'),
        littleSolomons: getImages('**/public/little-solomons/*.jpg'),
        rappelling: getImages('**/public/rappelling/*.jpg'),
      },
    },
  };
};

interface Props {
  images: {
    riverSchools: string[];
    pollywogs: string[];
    riverRangers: string[];
    littleSolomons: string[];
    rappelling: string[];
  };
}

const Gallery: React.FC<Props> = ({ images }) => {
  return (
    <Chrome page="/gallery">
      <div className="py-20">
        <h1 className="font-raleway text-5xl ml text-center">Gallery</h1>
        <div className="mt-16 flex flex-col gap-8">
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
};

export default Gallery;

interface SectionProps {
  title: string;
  description: string;
  slug: string;
  images: string[];
}

const Section: React.FC<SectionProps> = ({ images, title, description, slug }) => {
  return (
    <div className="bg-slate-100 rounded-3xl px-16 pt-12 pb-4 mx-4 relative">
      <h2 className="text-4xl text-slate-800 font-bold">{title}</h2>
      <p className="mt-4 text-slate-600 max-w-6xl">{description}</p>
      <Carousel images={images} className="mt-8" />
      <Button
        type="link"
        to={`/programs/${slug}`}
        color="secondary"
        className="absolute right-4 top-4 !bg-emerald-200/70 !text-emerald-700 hover:!bg-emerald-200"
        size="md"
        icon="arrow-circle-right"
      >
        Find out more
      </Button>
    </div>
  );
};
