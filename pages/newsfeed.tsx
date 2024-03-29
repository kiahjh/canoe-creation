import React from "react";
import cx from "classnames";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import type { GetStaticProps } from "next";
import type { NewsfeedPost } from "../lib/types";
import { getAllNewsfeedPosts } from "../lib/getObjects";
import Chrome from "../components/Chrome";
import { relativeTime } from "../lib/dates";
import Sparkle from "../components/Sparkle";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const newsfeedPosts = await getAllNewsfeedPosts();
  return {
    props: {
      newsfeedPosts,
    },
  };
};

interface Props {
  newsfeedPosts: NewsfeedPost[];
}

const Newsfeed: React.FC<Props> = ({ newsfeedPosts }) => (
  <Chrome
    page={`/newsfeed`}
    title={`Canoe Creation | Newsfeed`}
    description="Recent news and announcements from Canoe Creation."
  >
    <div className="flex flex-col items-center pt-16 pl-8 xs:pl-4 pr-8 md:pl-16 md:pr-16 overflow-hidden mb-20">
      <h1 className="text-4xl mt-0 sm:mt-8 font-raleway relative">
        <Sparkle size={16} position={`right-8 -bottom-6`} color={`emerald`} />
        <Sparkle size={16} position={`-right-8 bottom-6`} color={`cyan`} />
        <Sparkle size={24} position={`-left-12 -top-2`} color={`emerald`} />
        <Sparkle size={16} position={`-left-4 -top-8`} color={`yellow`} />
        <span className="relative">Canews Feed</span>
      </h1>
      {newsfeedPosts.map((post, index) => (
        <div className="flex max-w-3xl" key={post.id}>
          <MegaphoneIcon
            className={cx(
              `h-8 relative top-[96px] text-cyan-500 shrink-0 hidden sm:block`,
              index === 0 && `mt-4`,
              index === newsfeedPosts.length - 1 && `-mt-4`,
            )}
          />
          <div
            className={cx(
              `w-8 md:w-20 border-l-4 border-t-4 border-slate-200 relative top-[108px] mx-8 shrink-0 hidden xs:block`,
              index === 0 && `rounded-tl-3xl`,
              index === newsfeedPosts.length - 1 && `!border-l-0 !border-t-0`,
              index === newsfeedPosts.length - 2 &&
                `!border-b-4 !rounded-bl-3xl`,
            )}
          />
          <div key={post.id} className="pt-16">
            <h3
              className="font-bold bg-gradient-to-r from-cyan-700 to-cyan-500 w-fit bg-clip-text text-transparent"
              id={post.slug}
            >
              {relativeTime(post.createdAt)}
            </h3>
            <h2 className="font-raleway text-2xl xs:text-3xl mb-4 mt-1 text-slate-900">
              {post.title}
            </h2>
            <p
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose sm:prose-p:text-lg prose-p:text-slate-500 sm:prose-p:leading-8"
            />
          </div>
        </div>
      ))}
    </div>
  </Chrome>
);

export default Newsfeed;
