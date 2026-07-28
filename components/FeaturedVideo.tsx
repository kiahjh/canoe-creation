import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { featuredVideo } from "../lib/videos";
import YouTubeVideo from "./YouTubeVideo";

const FeaturedVideo: React.FC = () => (
  <section
    id="featured-video"
    aria-labelledby="featured-video-title"
    className="relative overflow-hidden bg-[#073c43] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
  >
    <WaterLines />
    <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(32rem,1.25fr)] lg:gap-14 xl:gap-20">
      <div className="max-w-xl">
        <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
          <span className="h-px w-10 bg-cyan-300/70" />
          {featuredVideo.eyebrow}
        </div>
        <h2
          id="featured-video-title"
          className="font-raleway text-4xl leading-tight text-white sm:text-5xl"
        >
          {featuredVideo.title}
        </h2>
        <div className="mt-5 flex items-start gap-2 text-sm font-medium text-cyan-100/80 sm:text-base">
          <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
          <span>{featuredVideo.context}</span>
        </div>
        <p className="mt-5 text-base leading-7 text-cyan-50/75 sm:text-lg sm:leading-8">
          {featuredVideo.description}
        </p>
      </div>
      <YouTubeVideo
        video={featuredVideo}
        className="rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-white/15 sm:rounded-3xl"
      />
    </div>
  </section>
);

export default FeaturedVideo;

const WaterLines: React.FC = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1200 260"
    preserveAspectRatio="none"
    className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full text-cyan-200 opacity-[0.09] sm:h-64"
    fill="none"
  >
    <path
      d="M-40 92C132 20 250 166 416 92S705 19 874 92s286 80 396 15"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M-55 139C117 67 235 213 401 139S690 66 859 139s286 80 396 15"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M-30 186C142 114 260 260 426 186s289-73 458 0 286 80 396 15"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
