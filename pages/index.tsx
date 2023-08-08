import React from 'react';
import { GetStaticProps } from 'next';
import type { CCEvent, NewsfeedPost } from '../lib/types';
import HeroBlock from '../components/HeroBlock';
import Waves from '../components/Waves';
import InfoBlock from '../components/InfoBlock';
import CalendarBlock from '../components/CalendarBlock';
import { getAllEvents, getAllNewsfeedPosts } from '../lib/getObjects';
import Chrome from '../components/Chrome';
import CTABlock from '../components/CTABlock';

export const getStaticProps: GetStaticProps<Props> = async () => {
  const events = await getAllEvents();
  const newsfeedPosts = await getAllNewsfeedPosts();
  return {
    props: {
      events,
      mostRecentNewsfeedPost: newsfeedPosts[0],
    },
  };
};

interface Props {
  events: CCEvent[];
  mostRecentNewsfeedPost: NewsfeedPost;
}

const Home: React.FC<Props> = ({ events, mostRecentNewsfeedPost }) => (
  <Chrome page="/">
    <HeroBlock />
    <div className="z-10 relative">
      {/* <div className="overflow-hidden flex">
        <Waves className="w-[190%] xs:w-[150%] sm:w-full xl:w-3/4 shrink-0" />
        <Waves className="w-3/4 shrink-0 mt-[16px]" />
      </div> */}
      <InfoBlock mostRecentNewsfeedPost={mostRecentNewsfeedPost} />
      <CalendarBlock events={events} />
      <CTABlock />
    </div>
  </Chrome>
);

export default Home;
