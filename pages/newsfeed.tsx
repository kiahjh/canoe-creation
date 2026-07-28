import React from "react";
import cx from "classnames";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import type { GetStaticProps } from "next";
import type { NewsfeedPost } from "../lib/types";
import { getAllNewsfeedPosts } from "../lib/getObjects";
import Chrome from "../components/Chrome";
import { relativeTime } from "../lib/dates";
import Sparkle from "../components/Sparkle";
import YouTubeVideo from "../components/YouTubeVideo";

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
    title={`Canoe Creation | What's New`}
    description="Recent videos, news, and announcements from Canoe Creation."
  >
    <div className="flex flex-col items-center overflow-hidden px-6 pb-20 pt-14 xs:px-8 md:px-16 sm:pt-20">
      <div className="relative flex max-w-3xl flex-col items-center text-center">
        <Sparkle size={16} position={`right-8 -bottom-6`} color={`emerald`} />
        <Sparkle size={16} position={`-right-8 bottom-6`} color={`cyan`} />
        <Sparkle size={24} position={`-left-12 top-6`} color={`emerald`} />
        <Sparkle size={16} position={`-left-4 -top-2`} color={`yellow`} />
        <p className="font-bold uppercase tracking-[0.18em] text-cyan-700">
          The Canews Feed
        </p>
        <h1 className="relative mt-3 font-raleway text-4xl text-slate-900 sm:text-5xl">
          What&apos;s New at Canoe Creation
        </h1>
        <p className="relative mt-4 max-w-2xl text-slate-500 sm:text-lg">
          Recent videos, news, and announcements from Canoe Creation.
        </p>
      </div>
      <div className="mt-2 flex w-full flex-col items-center">
        {newsfeedPosts.map((post, index) => (
          <article
            className="flex w-full max-w-3xl scroll-mt-8"
            id={post.slug}
            key={post.id}
          >
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
            <div className="min-w-0 flex-1 pt-16">
              <h3 className="w-fit bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text font-bold text-transparent">
                {relativeTime(post.createdAt)}
              </h3>
              <h2 className="mb-4 mt-1 font-raleway text-2xl text-slate-900 xs:text-3xl">
                {post.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose max-w-none prose-p:text-slate-500 sm:prose-p:text-lg sm:prose-p:leading-8"
              />
              {post.video && (
                <YouTubeVideo
                  video={post.video}
                  className="mt-7 rounded-2xl shadow-lg ring-1 ring-slate-900/10"
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </Chrome>
);

export default Newsfeed;
