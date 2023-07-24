import React from 'react';
import { GetStaticProps } from 'next';
import ProgramTemplate from '../../components/ProgramTemplate';
import { getAllEvents } from '../../lib/getObjects';
import { CCEvent } from '../../lib/types';
import getImages from '../../lib/get-images';

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter((event) => event.type === 'pollywogs');
  const images = getImages(`**/public/pollywogs/*.jpg`);
  return {
    props: { events, images },
  };
};

interface Props {
  events: CCEvent[];
  images: string[];
}

const Pollywogs: React.FC<Props> = ({ events, images }) => {
  return (
    <ProgramTemplate
      title={'Pollywog Float'}
      page={'/pollywogs'}
      events={events}
      paragraph1={
        'A great introductory float for Canoe Creation kids! Come out and join us for the day as we paddle downstream to catch critters, look under rocks, follow animal tracks, and play in the water. Learn to paddle a canoe as we navigate our way past great blue herons, swallows, wildflowers, and muskrats, following the hints our Great Creator has left behind to know Him! Parents are welcome to register, too, if they’d like, or drop off their kids in the morning and pick up in the afternoon.'
      }
      quote={{
        text: `I loved the fact that it was outdoors and we were learning new things and trying new things. I enjoyed being in nature and interacting with other kids at the same time.`,
        cite: `Charlie, participant`,
      }}
      paragraph2="The kids will start the day with an introduction to water safety, then get paired up with experienced interns and launched out onto the river in canoes. Paddling downstream, they’ll have the opportunity to make frequent stops along sandbars to look for freshwater mussels, killdeer nests, and sleeping fawns. They’ll turn over river rocks to discover crayfish, water pennies, and caddisfly larvae. While eating packed lunches on an island, they’ll listen to Al talk about God’s creation, and experience it close-up for themselves. Netting fish, identifying mussels, observing a bald eagle nest, listening for birds…..this and much more will make up the better part of the day as they make their way downstream, finally to pull the canoes ashore and shuttle back to where they started to meet their parents. Kids will leave the river with new things to consider, a renewed interest in what we see around us, and a sense of awe for the One who made it all."
      numDaysRange={{
        min: 1,
        max: 2,
      }}
      ageRange={{
        min: 8,
        max: 12,
      }}
      priceRange={{
        min: 45,
        max: 90,
      }}
      images={images}
    />
  );
};

export default Pollywogs;
