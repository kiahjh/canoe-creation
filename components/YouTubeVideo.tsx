import React, { useState } from "react";
import Image from "next/image";
import cx from "classnames";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import type { CanoeCreationVideo } from "../lib/types";

interface Props {
  video: CanoeCreationVideo;
  className?: string;
  priority?: boolean;
}

const YouTubeVideo: React.FC<Props> = ({ video, className, priority }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={cx(`overflow-hidden bg-slate-950`, className)}>
      <div className="relative aspect-video">
        {isPlaying ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&playsinline=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative block h-full w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-cyan-300"
            aria-label={`Play ${video.title}`}
          >
            <Image
              src={video.thumbnail}
              alt=""
              fill
              priority={priority}
              sizes="(min-width: 1280px) 720px, (min-width: 1024px) 55vw, 100vw"
              className="object-cover transition duration-500 motion-safe:group-hover:scale-[1.025]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-slate-950/10 transition group-hover:from-slate-950/65" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center gap-3 rounded-full bg-white/95 py-3 pl-4 pr-5 font-medium text-slate-800 shadow-xl shadow-black/25 transition duration-200 group-hover:scale-105 group-hover:bg-white group-active:scale-95">
                <PlayIcon className="h-6 w-6 text-emerald-600" />
                Play video
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex justify-end border-t border-white/10 bg-slate-950 px-4 py-2.5">
        <a
          href={video.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Trouble playing? Watch on YouTube
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default YouTubeVideo;
