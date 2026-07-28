import type {
  APIBlogPost,
  APIEvent,
  APINewsfeedPost,
  APIResponse,
  BlogPost,
  CCEvent,
  NewsfeedPost,
} from "./types";
import {
  apiToBlogPost,
  apiToEvent,
  apiToNewsfeedPost,
} from "./data-conversion";
import { localNewsfeedPosts } from "./videos";

const bucketSlug = process.env.COSMIC_BUCKET_SLUG ?? ``;
const readKey = process.env.COSMIC_READ_KEY ?? ``;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const endpoint = `https://api.cosmicjs.com/v3/buckets`;
  const query = encodeURIComponent(`{"type":"blog-posts"}`);
  const url = `${endpoint}/${bucketSlug}/objects?&query=${query}&read_key=${readKey}`;
  const response = await fetch(url);
  const objs: APIResponse<APIBlogPost> = await response.json();
  return objs.objects
    .map(apiToBlogPost)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function getAllEvents(): Promise<CCEvent[]> {
  const endpoint = `https://api.cosmicjs.com/v3/buckets`;
  const query = encodeURIComponent(`{"type":"events"}`);
  const url = `${endpoint}/${bucketSlug}/objects?&query=${query}&read_key=${readKey}`;
  const response = await fetch(url);
  const objs: APIResponse<APIEvent> = await response.json();
  return objs.objects.map(apiToEvent);
}

export async function getAllNewsfeedPosts(): Promise<NewsfeedPost[]> {
  const endpoint = `https://api.cosmicjs.com/v3/buckets`;
  const query = encodeURIComponent(`{"type":"newsfeed-posts"}`);
  const url = `${endpoint}/${bucketSlug}/objects?&query=${query}&read_key=${readKey}`;
  const response = await fetch(url);
  const objs: APIResponse<APINewsfeedPost> = await response.json();
  const localSlugs = new Set(localNewsfeedPosts.map((post) => post.slug));
  const cosmicPosts = objs.objects
    .map(apiToNewsfeedPost)
    .filter((post) => !localSlugs.has(post.slug));
  return [...localNewsfeedPosts, ...cosmicPosts].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
}
