import React from "react";
import type { GetStaticProps } from "next";
import type { CCEvent } from "../../lib/types";
import ProgramTemplate from "../../components/ProgramTemplate";
import { getAllEvents } from "../../lib/getObjects";
import getImages from "../../lib/get-images";

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter(
    (event) => event.type === `river-rangers`,
  );
  const images = getImages(
    `**/public/river-rangers/*.jpg`,
    `cottonwood-fuzzies`,
    `catfish`,
    `burma`,
  );
  return {
    props: { events, images },
  };
};

interface Props {
  events: CCEvent[];
  images: string[];
}

const RiverRangers: React.FC<Props> = ({ events, images }) => (
  <ProgramTemplate
    title={`River Rangers`}
    page={`/river-rangers`}
    events={events}
    paragraph1={`Whether standing in the flow and feeling the force of the river's current or racing toward a net to capture stream fish, this is the program for pre-teens (11-13) that will excite and invite them into the adventure of getting into God's handiwork. Studying, capturing, and looking at the details of other living things shows each of us how carefully designed God's world is. Time alone with their Creator and His Word is built in. Grow in your canoeing skills and jump into the goofy fun!`}
    numDaysRange={{
      min: 1,
      max: 1,
    }}
    ageRange={{
      min: 11,
      max: 13,
    }}
    priceRange={{
      min: 65,
      max: null,
    }}
    images={images}
  />
);

export default RiverRangers;
