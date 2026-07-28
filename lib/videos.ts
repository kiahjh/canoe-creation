import type { CanoeCreationVideo, NewsfeedPost } from "./types";

export const featuredVideo: CanoeCreationVideo = {
  youtubeId: `Rs0gpUpOOlk`,
  title: `Behold His Glory`,
  eyebrow: `Featured video`,
  context: `Lake Monroe · Bloomington, Indiana`,
  description: `This video offers a look at a private Canoe Creation camp held for Cedars Christian School on Lake Monroe near Bloomington, Indiana.`,
  thumbnail: `https://i.ytimg.com/vi/Rs0gpUpOOlk/maxresdefault.jpg`,
  youtubeUrl: `https://youtu.be/Rs0gpUpOOlk`,
};

export const overviewVideo: CanoeCreationVideo = {
  youtubeId: `iJgqtlZu6g8`,
  title: `Canoe Creation: An Overview`,
  eyebrow: `Start here`,
  context: `Our mission and programs`,
  description: `See how Canoe Creation uses outdoor adventures and the study of creation to encourage young people in their Christian faith.`,
  thumbnail: `https://i.ytimg.com/vi/iJgqtlZu6g8/hqdefault.jpg`,
  youtubeUrl: `https://www.youtube.com/watch?v=iJgqtlZu6g8`,
};

// The current Cosmic newsfeed schema only stores a title and body. Keeping this
// video post with its player metadata avoids expanding the CMS for one special
// post while announcements and future updates can continue to live in Cosmic.
export const localNewsfeedPosts: NewsfeedPost[] = [
  {
    id: `behold-his-glory-cedars-video`,
    slug: `behold-his-glory-cedars`,
    title: `Behold His Glory: Canoe Creation with Cedars Christian School`,
    content: `This video offers a look at a private Canoe Creation camp held for Cedars Christian School on Lake Monroe near Bloomington, Indiana—an example of how Canoe Creation works with schools and groups to help young people study God’s creation and encounter their Creator.`,
    createdAt: `2026-07-23T21:39:22-07:00`,
    video: featuredVideo,
  },
];
