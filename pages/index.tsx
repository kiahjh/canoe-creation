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
  <Chrome
    page="/"
    title={`Canoe Creation`}
    description="Canoe Creation exists to declare the glory of God by studying His works in creation and discipling youth in their Christian faith. Floating classrooms led by expert instructor/guides instill academic excellence, while teaching critical thinking. Rappelling adventures, retreats and classes for young children provide families with wholesome learning, fun and opportunity to encounter their Creator."
  >
    <HeroBlock />
    <div className="z-10 relative">
      <InfoBlock mostRecentNewsfeedPost={mostRecentNewsfeedPost} />
      <CalendarBlock events={events} />
      <CTABlock />
    </div>
  </Chrome>
);

export default Home;
