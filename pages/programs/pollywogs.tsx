import React from "react";
import type { GetStaticProps } from "next";
import type { CCEvent } from "../../lib/types";
import ProgramTemplate from "../../components/ProgramTemplate";
import { getAllEvents } from "../../lib/getObjects";
import getImages from "../../lib/get-images";

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter(
    (event) => event.type === `pollywogs`,
  );
  const images = getImages(
    `**/public/pollywogs/*.jpg`,
    `net-catch`,
    `girls-canoeing`,
    `kids-splashing`,
  );
  return {
    props: { events, images },
  };
};

interface Props {
  events: CCEvent[];
  images: string[];
}

const Pollywogs: React.FC<Props> = ({ events, images }) => (
  <ProgramTemplate
    title={`Pollywog Float`}
    page={`/pollywogs`}
    events={events}
    paragraph1={`Great starter float for Canoe Creation kids! Come join us for the day as we catch critters, look under rocks, follow animal tracks, play games! Learn to paddle well as we travel by great blue herons, swallows, wildflowers, and muskrats and follow hints of our Great Creator left behind to know Him!`}
    quote={{
      text: `This is the either the first or second best thing I’ve ever done in my life!`,
      cite: `Karis B, participant`,
    }}
    paragraph2="Parents may register too!"
    numDaysRange={{
      min: 1,
      max: 2,
    }}
    ageRange={{
      min: 8,
      max: 10,
    }}
    priceRange={{
      min: 45,
      max: 90,
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

export default Pollywogs;
