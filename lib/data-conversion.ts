import {
  APIBlogPost,
  APIEvent,
  APINewsfeedPost,
  BlogPost,
  CCEvent,
  EventType,
  NewsfeedPost,
} from './types';

export function apiToBlogPost(apiPost: APIBlogPost): BlogPost {
  return {
    title: apiPost.title,
    content: apiPost.content,
    author: apiPost.metadata.author,
    slug: apiPost.slug,
    id: apiPost.id,
    thumbnail: apiPost.metadata.thumbnail.url,
    images: [
      apiPost.metadata.image1?.url,
      apiPost.metadata.image2?.url,
      apiPost.metadata.image3?.url,
    ].filter(Boolean) as string[],
    createdAt: apiPost.created_at,
  };
}

export function apiToEvent(apiEvent: APIEvent): CCEvent {
  return {
    title: apiEvent.title,
    slug: apiEvent.slug,
    id: apiEvent.id,
    type: apiEvent.metadata.event_type.value,
    dateRange: [
      apiEvent.metadata.date_range.start_day,
      apiEvent.metadata.date_range.end_day || apiEvent.metadata.date_range.start_day,
    ],
    ageRange: [apiEvent.metadata.age_range.min_age, apiEvent.metadata.age_range.max_age],
    location: apiEvent.metadata.location,
    status: apiEvent.metadata.status.value,
    specialNotes: apiEvent.metadata.special_notes,
    costPerPerson: apiEvent.metadata.cost_per_person,
    description: apiEvent.metadata.description,
  };
}

export function apiToNewsfeedPost(apiNewsfeedPost: APINewsfeedPost): NewsfeedPost {
  return {
    title: apiNewsfeedPost.title,
    content: apiNewsfeedPost.content,
    slug: apiNewsfeedPost.slug,
    id: apiNewsfeedPost.id,
    createdAt: apiNewsfeedPost.created_at,
  };
}

export function eventTypeToSlug(eventType: EventType): string {
  switch (eventType) {
    case 'pollywog_float':
      return 'pollywog-float';
    case 'rappelling':
      return 'rappelling';
    case 'river_rangers':
      return 'river-rangers';
    case 'river_school':
      return 'river-school';
    case 'wilderness_camp':
      return 'wilderness-camp';
  }
}