import React from 'react';
import { GetStaticProps } from 'next';
import ProgramTemplate from '../../components/ProgramTemplate';
import { getAllEvents } from '../../lib/getObjects';
import { CCEvent } from '../../lib/types';
import getImages from '../../lib/get-images';

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter(
    (event) => event.type === 'little-solomons',
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

const LittleSolomons: React.FC<Props> = ({ events, images }) => {
  return (
    <ProgramTemplate
      title={'Little Solomons (2023)'}
      page={'/little-solomons'}
      events={events}
      paragraph1={
        'King Solomon, the wisest man in the world, studied lizards, trees, bird, fish and flowers in order to know God better (I Kings 4:33). In these classes, children learn about our wonderful God through the wonders He has made. They will spend time exploring the plants, birds, and creek critters of Creation; journaling and sketching about the wild wonders they discover; learning to sing of our marvelous, loving Make; and enjoying games and fun with the leaders.'
      }
      paragraph2="Join us for this captivating class with your little ones! Bring a change of clothes and old shoes or river shoes for your children, as we will be spending some time in the creek for all the classes. $36/child for 6 weeks. Parents and younger siblings are welcome to attend at no cost. Every Wednesday starting September 6th at 2:00-3:30pm. Classes held at our (Al and Amy Parker) home: 6400 Cutler Lake Rd. Blue Rock, OH 43720."
      numDaysRange={null}
      ageRange={{
        min: 5,
        max: 10,
      }}
      priceRange={{
        min: 36,
        max: null,
      }}
      images={images}
    />
  );
};

export default LittleSolomons;
