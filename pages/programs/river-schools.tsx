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
    paragraph1={`Get outside, get into the river, and join us for this floating classroom experience that you’ll never forget! While paddling down the current and navigating the waters, you’ll have the opportunity to learn about everything around you – and most importantly, about Him who created it, and why. Take a closer look at riparian wildlife than you’ve ever seen before and be amazed.`}
    quote={{
      text: `Al’s teaching makes creation come alive before our eyes! I’ve never seen my kids so excited about plants and animals, and with each new discovery they make on these trips, they just want to learn more. It’s like the unfolding of a great mystery that God has laid before us, and as Al leads the way and points things out along the river, the kids have the opportunity to look more closely and deeply consider   God’s creation. The sense of awe on their faces is priceless.`,
      cite: `Jessica H, homeschool mom`,
    }}
    paragraph2="We’ll start the day with a quick review of water safety, then launch out onto the river in our canoes. Paddling downstream, we’ll have the opportunity to make frequent stops along sandbars to look for freshwater mussels, killdeer nests, and sleeping fawns. We’ll turn over river rocks to discover crayfish, water pennies, and caddisfly larvae. While eating our packed lunches on an island, we’ll listen to Al talk about God’s creation, and experience it close-up for ourselves. Netting fish, identifying mussels, observing a bald eagle nest, listening for birds…..this and much more will make up the better part of the day as we make our way downstream, finally to pull our canoes ashore and shuttle back to where we started. You’ll leave the river with new things to consider, a renewed interest in what you see around you, and a sense of awe for the One who made it all."
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
  />
);

export default RiverSchools;
