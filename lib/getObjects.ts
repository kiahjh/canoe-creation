import { apiToBlogPost, apiToEvent } from './data-conversion';
import { APIBlogPost, APIEvent, APIResponse, BlogPost, CCEvent } from './types';

const bucketSlug = process.env.COSMIC_BUCKET_SLUG!;
const readKey = process.env.COSMIC_READ_KEY!;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const endpoint = `https://api.cosmicjs.com/v3/buckets`;
  const query = encodeURIComponent(`{"type":"blog-posts"}`);
  const url = `${endpoint}/${bucketSlug}/objects?&query=${query}&read_key=${readKey}`;
  const response = await fetch(url);
  const objs: APIResponse<APIBlogPost> = await response.json();
  return objs.objects.map(apiToBlogPost);
}

export async function getAllEvents(): Promise<CCEvent[]> {
  const endpoint = `https://api.cosmicjs.com/v3/buckets`;
  const query = encodeURIComponent(`{"type":"events"}`);
  const url = `${endpoint}/${bucketSlug}/objects?&query=${query}&read_key=${readKey}`;
  const response = await fetch(url);
  const objs: APIResponse<APIEvent> = await response.json();
  return objs.objects.map(apiToEvent);
}
