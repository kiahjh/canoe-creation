import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import cx from 'classnames';
import Chrome from '../../components/Chrome';
import { getAllBlogPosts } from '../../lib/getObjects';
import { BlogPost } from '../../lib/types';
import { relativeTime } from '../../lib/dates';
import BlogPostPreview from '../../components/BlogPostPreview';

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = await getAllBlogPosts();
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const allBlogPosts = await getAllBlogPosts();
  const blogPost = allBlogPosts.find((post) => post.slug === context.params!.slug)!;
  const recentPosts = allBlogPosts.slice(0, 3).filter((post) => post.id !== blogPost.id);

  return {
    props: {
      post: blogPost,
      recentPosts,
    },
  };
};

interface Props {
  post: BlogPost;
  recentPosts: BlogPost[];
}

const BlogPost: React.FC<Props> = ({ post, recentPosts }) => {
  return (
    <Chrome page="/blog">
      <div className="">
        <div className="px-0 xs:px-4 sm:px-6 md:px-12 py-8 flex flex-col items-center xl:items-start xl:flex-row gap-8">
          <div className="bg-slate-50 p-6 sm:p-8 md:p-16 xs:rounded-3xl shrink-0">
            <h3 className="font-semibold text-xl mb-2 bg-gradient-to-r from-cyan-700 to-cyan-500 w-fit bg-clip-text text-transparent">
              From the blog:
            </h3>
            <h1 className="font-inter text-3xl sm:text-4xl max-w-none xl:max-w-xl 2xl:max-w-none">
              {post.title}
            </h1>
            <h4 className="font-medium text-slate-800 mt-2">
              <span>by {post.author}</span>
              <span className="mx-2">•</span>
              <span>{relativeTime(post.createdAt)}</span>
            </h4>
            <p
              className="prose mt-6 max-w-2xl xl:max-w-xl 2xl:max-w-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          <div className="flex-grow flex flex-col gap-8 self-stretch mx-4 xs:mx-auto w-[calc(100vw-32px)] xs:w-full lg:w-[800px] xl:w-auto">
            <div
              className={cx('w-full h-52 xs:h-72 md:h-96 bg-cover bg-center rounded-3xl')}
              style={{ backgroundImage: `url(${post.thumbnail})` }}
            />
            <div
              className={cx(
                'flex sm:flex-row flex-col gap-8',
                !post.images[0] && !post.images[1] && 'hidden',
              )}
            >
              <div
                className={cx(
                  'flex-grow h-52 xs:h-72 sm:h-52 md:h-64 bg-cover bg-center rounded-3xl',
                  !post.images[0] && 'hidden',
                )}
                style={{ backgroundImage: `url(${post.images[0]})` }}
              />
              <div
                className={cx(
                  'flex-grow h-52 xs:h-72 sm:h-52 md:h-64 bg-cover bg-center rounded-3xl',
                  !post.images[0] && 'hidden',
                )}
                style={{ backgroundImage: `url(${post.images[1]})` }}
              />
            </div>
            <div
              className={cx(
                'w-full h-52 xs:h-72 md:h-96 bg-cover bg-center rounded-3xl',
                !post.images[2] && 'hidden',
              )}
              style={{ backgroundImage: `url(${post.images[2]})` }}
            />
            <div className="2xl:flex flex-col gap-8 hidden mt-8">
              <h3 className="font-inter text-3xl">More recent posts:</h3>
              {recentPosts.map((post) => (
                <BlogPostPreview post={post} />
              ))}
            </div>
          </div>
        </div>
        <div className="block 2xl:hidden p-4 xs:p-6 sm:p-8 md:p-12">
          <h3 className="font-inter text-3xl">More recent posts:</h3>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 flex-col mt-8">
            {recentPosts.map((post) => (
              <BlogPostPreview post={post} />
            ))}
          </div>
        </div>
      </div>
    </Chrome>
  );
};

export default BlogPost;
