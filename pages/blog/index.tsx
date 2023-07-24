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
          Canoe Creation blog
        </h1>
        <p className="mt-4 xs:text-lg max-w-6xl text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus animi
          asperiores deleniti beatae illum possimus assumenda nam culpa corporis, magni
          molestias eius exercitationem. Officiis, similique! Aut error officia rem
          fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla.
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
