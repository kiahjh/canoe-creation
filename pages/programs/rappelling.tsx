import React from 'react';
import { GetStaticProps } from 'next';
import ProgramTemplate from '../../components/ProgramTemplate';
import { getAllEvents } from '../../lib/getObjects';
import { CCEvent } from '../../lib/types';
import getImages from '../../lib/get-images';

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter((event) => event.type === 'rappelling');
  const images = getImages(
    '**/public/rappelling/*.jpg',
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

const Rappelling: React.FC<Props> = ({ events, images }) => {
  return (
    <ProgramTemplate
      title={'Rappelling'}
      page={'/rappelling'}
      events={events}
      paragraph1={
        'While descending the cliffs of the stunningly beautiful Hocking Hills gorges, you’ll be blown away by the view. As you lower yourself down past boulders and trickling waterfalls, one cannot help but consider the Creator of it all.'
      }
      quote={{
        text: `I enjoyed the last talk we had after we had rappelled the 120 footer. What Al said about trusting God with the knowledge He's given us really stuck with me. It has always been a struggle for me to depend on anything other than myself, but God has really been dealing with me about this lately, and I think rappelling was a good analogy of what it looks like to put our lives in God's hands, and trust His counsel and direction, even if it goes against our own reason.`,
        cite: `Eden H, intern`,
      }}
      paragraph2="We’ll start out the morning with safety training, and get our feet wet by rappelling down a 30 foot high boulder. Once we’ve mastered the technique of rappelling, we ascend to the heights. Hiking along the ridges of the gorgeous Hocking Hills State Park Rappelling Area and discovering some amazing works of God’s hand along the way, we’ll try out some of the higher cliffs, working our way up to a 120 foot waterfall. Afraid of heights? No worries – trained staff will help you work through your fears, and you’ll be amazed at what you can do. We’ll finish the day gathered among the boulders at the base of the waterfall, talking about fears, obstacles in life, and the God of the universe who is bigger than it all and desires to guide us safely through."
      numDaysRange={{
        min: 1,
        max: 2,
      }}
      ageRange={{
        min: 12,
        max: null,
      }}
      priceRange={{
        min: 70,
        max: null,
      }}
      images={images}
    />
  );
};

export default Rappelling;
