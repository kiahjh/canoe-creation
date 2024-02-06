import React from "react";
import cx from "classnames";
import Link from "next/link";
import type { CCEvent } from "../lib/types";
import Sparkle from "./Sparkle";
import Calendar from "./Calendar";

interface Props {
  events: CCEvent[];
}

const CalendarBlock: React.FC<Props> = ({ events }) => (
  <div
    className={cx(
      `flex flex-col px-6 xs:px-8 py-12 sm:py-20 sm:px-12 lg:px-20 relative bg-white`,
    )}
  >
    <Sparkle
      size={22}
      position={`lg+:block hidden left-10 bottom-24`}
      color={`cyan`}
    />
    <Sparkle
      size={20}
      position={`lg+:block hidden right-10 bottom-64`}
      color={`yellow`}
    />
    <Sparkle
      size={28}
      position={`lg+:block hidden right-4 bottom-72`}
      color={`emerald`}
    />
    <Sparkle
      size={18}
      position={`lg:block hidden left-32 top-4`}
      color={`yellow`}
    />
    <Sparkle
      size={16}
      position={`lg:block hidden right-32 top-40`}
      color={`yellow`}
    />
    <Sparkle
      size={20}
      position={`lg:block hidden right-40 top-20`}
      color={`yellow`}
    />
    <Sparkle
      size={24}
      position={`lg:block hidden right-48 top-32`}
      color={`cyan`}
    />
    <h2 className={cx(`text-4xl sm:text-5xl font-raleway`)}>
      Calendar of Events{` `}
      <span className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-transparent">
        for 2024
      </span>
    </h2>
    <p className="max-w-3xl mt-8 text-lg text-slate-600 mb-12">
      Below are our currently scheduled events for 2024. To request an aditional
      trip not already listed, feel free to{` `}
      <Link
        href={`/contact`}
        className="text-emerald-600 font-medium border-b-2 hover:border-b-4 hover:text-emerald-700 [transition:150ms] border-emerald-300"
      >
        contact us
      </Link>
      !
    </p>
    <Calendar events={events} />
  </div>
);

export default CalendarBlock;
