import React from "react";
import cx from "classnames";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { HeroIcon } from "../lib/types";
import Chrome from "../components/Chrome";

const GetInvolvedPage: React.FC = () => (
  <Chrome
    page={`/get-involved`}
    title="Canoe Creation | Get Involved"
    description="Get involved with Canoe Creation via prayer, monetary donations, spreading the word, or volunteering/interning with us!"
  >
    <div className="p-20 flex justify-center">
      <div className="border border-slate-200 p-16 rounded-3xl max-w-5xl flex-grow">
        <h1 className={cx(`font-raleway text-4xl`)}>
          Want to support Canoe Creation?
        </h1>
        <p className="text-slate-500 text-lg mt-4">
          Thank you so much for your interest! There's lots of ways you can help
          out; here's a few to get you started:
        </p>
        <ul className="mt-8 flex flex-col gap-4">
          <WayToHelpOut title="Pray" Icon={ArrowRightIcon}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </WayToHelpOut>
          <WayToHelpOut title="Donate" Icon={ArrowRightIcon}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </WayToHelpOut>
          <WayToHelpOut title="Spread the word" Icon={ArrowRightIcon}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </WayToHelpOut>
          <WayToHelpOut title="Volunteer/Internships" Icon={ArrowRightIcon}>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </WayToHelpOut>
        </ul>
      </div>
    </div>
  </Chrome>
);

export default GetInvolvedPage;

interface WayToHelpOutProps {
  title: string;
  children: React.ReactNode;
  Icon: HeroIcon;
}

const WayToHelpOut: React.FC<WayToHelpOutProps> = ({
  title,
  Icon,
  children,
}) => (
  <li className="bg-slate-50 p-6 rounded-2xl flex gap-4">
    <div>
      <div className="w-8 h-8 bg-emerald-200 rounded-full flex justify-center items-center">
        <Icon className="w-5 text-emerald-700" />
      </div>
    </div>
    <div>
      <h3 className="text-lg text-slate-800 font-bold">{title}</h3>
      <div className="text-slate-500">{children}</div>
    </div>
  </li>
);
