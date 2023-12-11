import React from "react";
import type { GetStaticProps } from "next";
import type { CCEvent } from "../../lib/types";
import ProgramTemplate from "../../components/ProgramTemplate";
import { getAllEvents } from "../../lib/getObjects";
import getImages from "../../lib/get-images";

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter(
    (event) => event.type === `river-schools`,
  );
  const images = getImages(
    `**/public/river-schools/*.jpg`,
    `island`,
    `river-drama-shot`,
    `foggy-canoes`,
  );
  return {
    props: { events, images },
  };
};

interface Props {
  events: CCEvent[];
  images: string[];
}

const RiverSchools: React.FC<Props> = ({ events, images }) => (
  <ProgramTemplate
    title={`River Schools`}
    page={`/river-schools`}
    events={events}
    paragraph1={`Study first hand God’s wonders on these floating classrooms! Expert guides and creation teachers will take you deep into science study and creation apologetics. Turtle eggs, eagle nests, mussel shells, bank swallows are just a few of the treasures we find showcasing the glory of our Great Creator. Join these faith-building, fun and adventurous classes!`}
    quote={{
      text: `Al’s teaching makes creation come alive before our eyes! I’ve never seen my kids so excited about plants and animals, and with each new discovery they make on these trips; they just want to learn more. It’s like the unfolding of a great mystery that God has laid before us, and as Al leads the way and points things out along the river, the kids have the opportunity to look more closely and deeply consider God’s creation. The sense of awe on their faces is priceless.`,
      cite: `Jessica H, homeschool mom`,
    }}
    paragraph2="Travel down the Upper Muskingum, Licking, or other rivers discovering firsthand bald eagles, osprey, bank swallows, button bush, or simply a snake sunning on a rock. Net fish, study rare and varied mussel shells; turn over rocks to discover crayfish, water pennies, and caddisfly larvae. What is a purple pimpleback? Listen for birds. Pull up on a gravel bar for lunch, spot a hidden killdeer nest, pick wild grapes, or float downstream on your back. Time for quiet beholding our Maker. These floating classrooms led by expert teachers and guides, will open your eyes to detail and little-known wonders that magnify our Maker. Kids will leave the river with new things to consider, a renewed interest in what we see around us, and a sense of awe for the One who made it all."
    numDaysRange={{
      min: 1,
      max: 3,
    }}
    ageRange={{
      min: 12,
      max: 20,
    }}
    priceRange={{
      min: 60,
      max: 140,
    }}
    images={images}
    registrationLinks={[
      {
        name: `Registration form`,
        url: `/registration/day-float-registration.pdf`,
      },
    ]}
  />
);

export default RiverSchools;
