import React from "react";
import type { GetStaticProps } from "next";
import type { CCEvent } from "../../lib/types";
import ProgramTemplate from "../../components/ProgramTemplate";
import { getAllEvents } from "../../lib/getObjects";
import getImages from "../../lib/get-images";

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter(
    (event) => event.type === `rappelling`,
  );
  const images = getImages(
    `**/public/rappelling/*.jpg`,
    `rappelling-descent`,
    `going-over-edge`,
    `rappelling-waterfall`,
  );
  return {
    props: { events, images },
  };
};

interface Props {
  events: CCEvent[];
  images: string[];
}

const Rappelling: React.FC<Props> = ({ events, images }) => (
  <ProgramTemplate
    title={`Rappelling`}
    page={`/rappelling`}
    events={events}
    paragraph1={`Descend cliffs from the 30 foot training boulder to the 120 foot waterfall. This exhilarating physical challenge is used to draw parallels in our spiritual lives in terms of risk, trust, prayer, and salvation. Trusting in the Lord with all your heart and leaning not on your own understanding is hard to do. Your rappelling adventure is led by well-trained staff with years of safe practice`}
    quote={{
      text: `I enjoyed the last talk we had after we had rappelled the 120 footer. What Al said about trusting God with the knowledge He's given us really stuck with me. It has always been a struggle for me to depend on anything other than myself, but God has really been dealing with me about this lately, and I think rappelling was a good analogy of what it looks like to put our lives in God's hands, and trust His counsel and direction, even if it goes against our own reason.`,
      cite: `Eden H, intern`,
    }}
    paragraph2="Hiking along the ridges of the gorgeous Hocking Hills State Park rappelling area, we may stop to hear a rare hermit thrush, find colorful and varied mushrooms or learn from Al what the various rock layers can teach us. Afraid of heights? No worries — trained staff will help you work through your fears, and you’ll be amazed at what you can do. We’ll finish the day at the base of the waterfall, talking about fears, obstacles in life, and the God of the universe who is bigger than it all, and who desires to guide us safely through."
    numDaysRange={{
      min: 1,
      max: 2,
    }}
    ageRange={{
      min: 12,
      max: null,
    }}
    priceRange={{
      min: 75,
      max: null,
    }}
    images={images}
    registrationLinks={[
      {
        name: `Registration form`,
        url: `/registration/rappelling-registration.pdf`,
      },
    ]}
  />
);

export default Rappelling;
