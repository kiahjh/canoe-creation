import React from 'react';
import striptags from 'striptags';
import { BlogPost } from '../lib/types';
import { relativeTime } from '../lib/dates';
import Button from './Button';

interface Props {
  post: BlogPost;
}

const BlogPostPreview: React.FC<Props> = ({ post }) => {
  return (
    <div
      key={post.id}
      className="p-4 rounded-3xl bg-slate-50 flex flex-col sm:flex-row items-stretch"
    >
      <div
        className="h-52 sm:h-auto w-auto sm:w-52 rounded-2xl shrink-0 bg-cover bg-center sm:mr-6"
        style={{
          backgroundImage: `url(${post.thumbnail})`,
        }}
      />
      <div className="pt-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl xs:text-2xl font-inter">{post.title}</h3>
          <h4 className="font-medium text-slate-600 text-sm xs:text-base">
            <span>by {post.author}</span>
            <span className="mx-2">•</span>
            <span>{relativeTime(post.createdAt)}</span>
          </h4>
          <p
            dangerouslySetInnerHTML={{
              __html: striptags(post.content).split(' ').slice(0, 40).join(' ') + '...',
            }}
            className="my-2 text-slate-500 text-sm xs:text-base"
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="link"
            to={`/blog/${post.slug}`}
            color="secondary"
            size="sm"
            icon="arrow-circle-right"
            className="bg-emerald-200/40 hover:bg-emerald-200/60"
          >
            Read post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPreview;
