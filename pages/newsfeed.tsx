import React from 'react';
import { GetStaticProps } from 'next';
import cx from 'classnames';
import { getAllNewsfeedPosts } from '../lib/getObjects';
import { NewsfeedPost } from '../lib/types';
import Chrome from '../components/Chrome';
import { relativeTime } from '../lib/dates';
import { MegaphoneIcon } from '@heroicons/react/24/outline';

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

const Newsfeed: React.FC<Props> = ({ newsfeedPosts }) => {
  return (
    <Chrome page={'/newsfeed'}>
      <div className="flex flex-col items-center pt-16 px-16 overflow-hidden mb-20">
        <h1 className="text-4xl mt-8 font-raleway">Newsfeed</h1>
        {newsfeedPosts.map((post, index) => (
          <div className="flex">
            <MegaphoneIcon
              className={cx(
                'h-8 relative top-[96px] text-cyan-600',
                index === 0 && 'mt-4',
                index === newsfeedPosts.length - 1 && '-mt-4',
              )}
            />
            <div
              className={cx(
                'w-20 border-l-4 border-t-4 border-slate-300 relative top-[108px] mx-8',
                index === 0 && 'rounded-tl-3xl',
                index === newsfeedPosts.length - 1 && 'border-l-0 border-t-0',
                index === newsfeedPosts.length - 2 && 'border-b-4 rounded-bl-3xl',
              )}
            ></div>
            <div key={post.id} className="w-176 pt-16">
              <h3
                className="font-bold bg-gradient-to-r from-cyan-700 to-cyan-500 w-fit bg-clip-text text-transparent"
                id={post.slug}
              >
                {relativeTime(post.createdAt)}
              </h3>
              <h2 className="font-raleway text-3xl mb-4 mt-1 text-slate-900">
                {post.title}
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose prose-p:text-lg prose-p:text-slate-500 prose-p:leading-8"
              />
            </div>
          </div>
        ))}
      </div>
    </Chrome>
  );
};

export default Newsfeed;
