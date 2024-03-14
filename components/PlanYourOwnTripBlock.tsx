import Link from "next/link";
import React from "react";

const PlanYourOwnTripBlock: React.FC = () => (
  <div className="p-6 xs:p-8 sm:p-12">
    <div className="p-8 sm:p-12 bg-gradient-to-b from-emerald-100 to-emerald-200 rounded-3xl flex flex-col items-center justify-center">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl font-raleway mb-4 text-emerald-800 text-center">
        Plan Your Own Outing!
      </h2>
      <p className="text-base xs:text-lg sm:text-xl text-emerald-700 text-center max-w-4xl">
        Schedule a creation-based canoe or rappelling trip for your own group!
        Contact us{` `}
        <Link href="/contact" className="text-cyan-600 font-medium underline">
          here
        </Link>
        {` `}
        to talk about how we can help facilitate an event for your youth group,
        scouts, or homeschoolers.
      </p>
    </div>
  </div>
);

export default PlanYourOwnTripBlock;
