import React from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Chrome from '../../components/Chrome';
import striptags from 'striptags';
import { BlogPost } from '../../lib/types';
import { getAllBlogPosts } from '../../lib/getObjects';
import { relativeTime } from '../../lib/dates';
import Button from '../../components/Button';
import BlogPostPreview from '../../components/BlogPostPreview';

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogPosts = await getAllBlogPosts();
  return {
    props: {
      blogPosts,
    },
  };
};

interface Props {
  blogPosts: BlogPost[];
}

const Blog: React.FC<Props> = ({ blogPosts }) => {
  return (
    <Chrome page="/blog">
      <div className="px-8 md:px-16 py-12 flex-grow">
        <h1 className="text-3xl xs:text-4xl md:text-5xl font-raleway">
          Canoe Creation River Log
        </h1>
        <p className="mt-4 xs:text-lg max-w-6xl text-slate-500">
          These short articles will help you to see the perspective of creation
          apologetics that Canoe Creation holds. They are not a typical blog where
          comments are bantered about, but are intended to open windows to look through
          and think about. If you have an interest in discussing these you may contact
          Canoe Creation via{' '}
          <a
            href="mailto:info@canoecreation.org"
            className="text-emerald-500 hover:text-emerald-600"
          >
            info@canoecreation.org
          </a>
          .
        </p>
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogPostPreview post={post} key={post.id} />
          ))}
        </div>
      </div>
    </Chrome>
  );
};

export default Blog;
