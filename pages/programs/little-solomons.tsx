import React from "react";
import type { GetStaticProps } from "next";
import type { CCEvent } from "../../lib/types";
import ProgramTemplate from "../../components/ProgramTemplate";
import { getAllEvents } from "../../lib/getObjects";
import getImages from "../../lib/get-images";

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter(
    (event) => event.type === `little-solomons`,
  );
  const images = getImages(
    `**/public/little-solomons/*.jpg`,
    `waterfall`,
    `two-girls`,
    `kid-journalling`,
  );
  return {
    props: { events, images },
  };
};

interface Props {
  events: CCEvent[];
  images: string[];
}

const LittleSolomons: React.FC<Props> = ({ events, images }) => (
  <ProgramTemplate
    title={`Little Solomons`}
    page={`/little-solomons`}
    events={events}
    paragraph1={`King Solomon, the wisest man in the world, studied lizards, trees, bird, fish, and flowers in order to know God better (1 Kings 4:33). In these classes, children learn about our wonderful God through the wonders He has made. Join us for this captivating class with your little ones! Themed classes include: Stream Class, Fruits of Fall, Wildflowers. Events are 1.5 hours long, and include discovery hikes, journaling, games, and singing.`}
    paragraph2="Held at the Parker Home (6400 Cutler Lake Rd., Blue Rock, Oh 43720). Scheduled periodically through the year; contact us for the next session or one day event. Great for homeschool groups, families, or church programs. Parents and younger siblings may attend free of charge."
    numDaysRange={null}
    ageRange={{
      min: 4,
      max: 8,
    }}
    priceRange={{
      min: 7,
      max: null,
    }}
    images={images}
    registrationLinks={[]}
  />
);

export default LittleSolomons;
