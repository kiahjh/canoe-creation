import React from "react";
import type { GetStaticProps } from "next";
import type { CCEvent, NewsfeedPost } from "../lib/types";
import HeroBlock from "../components/HeroBlock";
import InfoBlock from "../components/InfoBlock";
import CalendarBlock from "../components/CalendarBlock";
import { getAllEvents, getAllNewsfeedPosts } from "../lib/getObjects";
import Chrome from "../components/Chrome";
import CTABlock from "../components/CTABlock";

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
      <InfoBlock mostRecentNewsfeedPost={mostRecentNewsfeedPost} />
      <CalendarBlock events={events} />
      <CTABlock />
    </div>
  </Chrome>
);

export default Home;
