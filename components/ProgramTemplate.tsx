import React, { useState } from "react";
import cx from "classnames";
import {
  CalendarDaysIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import type { CCEvent } from "../lib/types";
import { formatAgeRange } from "../lib/strings";
import Chrome from "./Chrome";
import Button from "./Button";
import EventCard from "./EventCard";
import ContactForm from "./ContactForm";
import Testimonial from "./Testimonial";

interface Props {
  title: string;
  page: string;
  paragraph1: string;
  paragraph2?: string;
  quote?: {
    text: string;
    cite: string;
  };
  numDaysRange: {
    min: number;
    max: number;
  } | null;
  ageRange: {
    min: number | null;
    max: number | null;
  };
  priceRange: {
    min: number;
    max: number | null;
  };
  images: string[];
  events: CCEvent[];
  registrationLinks: Array<{
    name: string;
    url: string;
  }>;
}

const ProgramTemplate: React.FC<Props> = ({
  title,
  paragraph1,
  paragraph2,
  quote,
  page,
  numDaysRange,
  ageRange,
  priceRange,
  images,
  events,
  registrationLinks,
}) => {
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <Chrome
      page={page}
      title={`Canoe Creation | ${title}`}
      description={paragraph1}
      imageViewer={{
        isOpen: imageViewerOpen,
        setIsOpen: setImageViewerOpen,
        images,
        index: imageIndex,
        setIndex: setImageIndex,
      }}
    >
      <main className="flex flex-col lg:flex-row">
        <div className="flex-grow py-12 sm:py-16 px-4 xs:px-8 sm:px-12 lg+:px-16">
          <h1 className="text-4xl sm:text-5xl font-raleway w-fit text-slate-950">
            {title}
          </h1>
          <div className="mt-4 mb-6 flex gap-2 flex-wrap">
            {numDaysRange && (
              <div className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1">
                <CalendarDaysIcon className="h-5 text-slate-500" />
                <span className="text-slate-500 text-sm">
                  {numDaysRange.min}
                  {numDaysRange.max !== numDaysRange.min &&
                    `-${numDaysRange.max}`}
                  {` `}
                  day
                  {numDaysRange.max !== 1 && `s`}
                </span>
              </div>
            )}
            <div className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1">
              <UsersIcon className="h-5 text-slate-500" />
              <span className="text-slate-500 text-sm">
                {formatAgeRange(ageRange.min, ageRange.max)}
              </span>
            </div>
            <div className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1">
              <CurrencyDollarIcon className="h-5 text-slate-500" />
              <span className="text-slate-500 text-sm">{`$${priceRange.min}${
                priceRange.max ? `-$${priceRange.max}` : ``
              } / person`}</span>
            </div>
            {!title.includes(`Little Solomons`) && (
              <Link
                href="#events"
                className="border border-slate-400 rounded-full bg-white flex justify-center items-center space-x-2 px-2 py-1 hover:bg-slate-100 transition-colors duration-150"
              >
                <CalendarIcon className="h-5 text-slate-500" />
                <span className="text-slate-500 text-sm">
                  See this year's events
                </span>
              </Link>
            )}
          </div>
          <p className="text-slate-500 text-lg leading-8">{paragraph1}</p>
          {quote && (
            <Testimonial
              text={quote.text}
              cite={quote.cite}
              className="mb-12 mt-16"
            />
          )}
          <p
            className={cx(`text-slate-500 text-lg leading-8`, !quote && `mt-4`)}
          >
            {paragraph2}
          </p>
          {events.length > 0 && (
            <div
              className="mt-16 py-6 px-4 xs:py-8 xs:px-8 bg-emerald-50 rounded-3xl"
              id="events"
            >
              <h3 className="text-2xl font-inter text-emerald-900">
                Events this year:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4 mt-4">
                {events.map((e) => (
                  <EventCard key={e.id} event={e} withoutInfoButton />
                ))}
              </div>
            </div>
          )}
        </div>
        <div
          className={cx(
            `lg:w-112 lg+:w-128 xl:w-152 2xl:w-176 mt-0 lg:mt-16 ml-4 xs:ml-8 sm:ml-12 mr-4 xs:mr-8 sm:mr-12 lg:mr-8 lg:ml-0 xl:ml-8 m-8 rounded-3xl shrink-0 lg:self-start`,
            images.length > 0 && `bg-slate-100 `,
          )}
        >
          {images.length > 0 && (
            <div className="p-4 xs:p-6 lg+:p-8">
              {images[0] && (
                <Image
                  src={images[0]}
                  alt="Canoe Creation image"
                  width={700}
                  height={300}
                  className="h-52 sm:h-72 lg:h-52 lg+:h-72 object-center object-cover rounded-3xl hover:scale-[102%] hover:shadow-lg transition duration-200 cursor-pointer w-full"
                  onClick={() => {
                    setImageIndex(0);
                    setImageViewerOpen(true);
                  }}
                />
              )}
              {images.length > 1 && (
                <div className="flex gap-2 xs:gap-4 xl:gap-6 mt-2 xs:mt-4 xl:mt-6">
                  <Image
                    src={images[1]}
                    alt="Canoe Creation image"
                    width={700}
                    height={300}
                    className={cx(
                      `object-center object-cover rounded-3xl hover:scale-[102%] hover:shadow-lg transition duration-200 cursor-pointer`,
                      images.length === 2
                        ? `h-52 sm:h-72 lg:h-52 lg+:h-72 w-full`
                        : `h-40 sm:h-52 lg:h-40 xl:h-64 w-0 flex-grow`,
                    )}
                    onClick={() => {
                      setImageIndex(1);
                      setImageViewerOpen(true);
                    }}
                  />
                  {images[2] && (
                    <Image
                      src={images[2]}
                      alt="Canoe Creation image"
                      width={700}
                      height={300}
                      className="h-40 sm:h-52 lg:h-40 xl:h-64 w-0 flex-grow object-center object-cover rounded-3xl hover:scale-[102%] hover:shadow-lg transition duration-200 cursor-pointer"
                      onClick={() => {
                        setImageIndex(2);
                        setImageViewerOpen(true);
                      }}
                    />
                  )}
                </div>
              )}
              {images.length > 3 && (
                <div className="flex justify-center mt-8">
                  <Button
                    type="button"
                    onClick={() => setImageViewerOpen(true)}
                    color="secondary"
                    size="sm"
                    icon="grid"
                    className="!bg-emerald-200/60 hover:!bg-emerald-200"
                  >
                    See more
                  </Button>
                </div>
              )}
            </div>
          )}
          <div className="sm:p-6 lg+:p-8 flex flex-col gap-8">
            {registrationLinks.length > 0 && (
              <div className="flex justify-center flex-wrap items-center gap-4 p-8 rounded-3xl sm:bg-slate-50">
                {registrationLinks.map((regLink) => (
                  <Link
                    href={regLink.url}
                    className="font-medium text-lg text-cyan-600 underline px-4 py-1 rounded-lg hover:bg-cyan-500/10 transition-colors duration-150"
                  >
                    {regLink.name}
                  </Link>
                ))}
                <div className="text-center text-slate-500">
                  Send to{` `}
                  <a
                    href="mailto:amy@canoecreation.org"
                    className="text-cyan-600 underline cursor-pointer"
                  >
                    amy@canoecreation.org
                  </a>
                  , or mail to 6400 Cutler Lake Rd., Blue Rock, OH 43720
                </div>
              </div>
            )}
            <ContactForm className="bg-slate-100 sm:bg-slate-50 rounded-b-3xl sm:rounded-t-3xl p-4 xs:p-6 lg+p-8" />
          </div>
        </div>
      </main>
    </Chrome>
  );
};

export default ProgramTemplate;
