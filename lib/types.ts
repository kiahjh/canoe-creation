export type APIResponse<T> = {
  objects: T[];
  total: number;
};

export type APIEvent = {
  type: 'events';
  status: 'published' | 'draft';
  title: string;
  slug: string;
  published_at: string;
  modified_at: string;
  modified_by: string;
  created_at: string;
  created_by: string;
  id: string;
  content: string;
  bucket: string;
  metadata: {
    age_range: {
      min_age: number | null;
      max_age: number | null;
    };
    cost_per_person: number | null;
    date_range: {
      start_day: string;
      end_day: string | null; // null if trip is one day
    };
    event_type: {
      key: FormattedEventType;
      value: EventType;
    };
    location: string | null;
    special_notes: string | null;
    description: string | null;
    status: {
      key: FormattedStatus;
      value: Status;
    };
  };
};

export type APIBlogPost = {
  type: 'blog-posts';
  status: 'published' | 'draft';
  title: string;
  slug: string;
  published_at: string;
  modified_at: string;
  modified_by: string;
  created_at: string;
  created_by: string;
  id: string;
  content: string;
  bucket: string;
  metadata: {
    author: string;
    image1: APIImage | null;
    image2: APIImage | null;
    image3: APIImage | null;
    thumbnail: APIImage;
  };
};

export type APINewsfeedPost = {
  type: 'newsfeed-posts';
  status: 'published' | 'draft';
  title: string;
  slug: string;
  published_at: string;
  modified_at: string;
  modified_by: string;
  created_at: string;
  created_by: string;
  id: string;
  content: string;
  bucket: string;
  metadata: {};
};

export type CCEvent = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  type: EventType;
  costPerPerson: number | null;
  dateRange: [string, string];
  ageRange: [number | null, number | null];
  location: string | null;
  status: Status;
  specialNotes: string | null;
};

export type BlogPost = {
  title: string;
  content: string;
  author: string;
  slug: string;
  id: string;
  thumbnail: string;
  images: string[];
  createdAt: string;
};

export type NewsfeedPost = {
  title: string;
  content: string;
  slug: string;
  id: string;
  createdAt: string;
};

export type EventType =
  | 'rappelling'
  | 'river_school'
  | 'pollywog_float'
  | 'wilderness_camp'
  | 'river_rangers';
export type FormattedEventType =
  | 'Rappelling'
  | 'River School'
  | 'Pollywog Float'
  | 'Wilderness Camp'
  | 'River Rangers';

export type Status = 'open' | 'full' | 'private';
export type FormattedStatus = 'Open' | 'Full' | 'Private';

export type APIImage = {
  imgix_url: string;
  url: string;
};
