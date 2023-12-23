import React from "react";
import cx from "classnames";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
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
          Thank you for your interest in Canoe Creation! Join with us to declare
          His power to the next generation. (Ps. 71:18)
        </p>
        <ul className="mt-8 flex flex-col gap-4">
          <WayToHelpOut title="Pray" Icon={ArrowRightIcon}>
            Receive praise and prayer updates or join online weekly prayer.
          </WayToHelpOut>
          <WayToHelpOut title="Donate" Icon={ArrowRightIcon}>
            Use the donate button at the top of this page, or mail a check to
            the address listed in the footer.
          </WayToHelpOut>
          <WayToHelpOut title="Spread the word" Icon={ArrowRightIcon}>
            Share with those of like mind: family, church, homeschool groups,
            etc. We also have a{` `}
            <Link
              href="https://facebook.com/canoecreationofficial"
              className="text-emerald-500 underline"
            >
              facebook page
            </Link>
            .
          </WayToHelpOut>
          <WayToHelpOut title="Volunteer/Internships" Icon={ArrowRightIcon}>
            <ul className="list-disc ml-4 mt-1">
              <li>
                <strong>Internships:</strong> Serve as a river guide/aide.
                Contact us to inquire{` `}
                <Link href="/contact" className="text-emerald-500 underline">
                  here
                </Link>
                .
              </li>
              <li>
                <strong>Hands-on volunteer work:</strong> From office help to
                assisting with trips and upkeep of ministry.
              </li>
              <li>
                <strong>Work camps:</strong> Group onsite work camps combine
                work projects with creation teaching and fun.
              </li>
            </ul>
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
