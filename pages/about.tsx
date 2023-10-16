import React from "react";
import Image from "next/image";
import Chrome from "../components/Chrome";
import InternGroupPic from "../public/river-schools/intern-group-2023.jpg";

const About: React.FC = () => (
  <Chrome
    page="/about"
    title="Canoe Creation | About"
    description="All about the history, mission, and current status of Canoe Creation."
  >
    <div className="flex justify-center items-center py-8 xs:py-12 sm:py-20 px-6 xs:px-8 sm:px-12 md:px-20">
      <div className="absolute w-full lg:w-5/6 h-1/2 bg-emerald-50 rounded-3xl" />
      <div className="prose prose-p:text-slate-600 bg-white py-8 sm:py-12 md:py-16 px-6 sm:px-12 md:px-16 max-w-3xl rounded-3xl relative bg-opacity-70 backdrop-blur-3xl shadow">
        <h1>About Canoe Creation</h1>
        <p>
          As a non-profit organization founded in 2008, Canoe Creation exists to
          get kids outside and into creation. More than anything, Al & Amy
          Parker have a heart for God and for making Him known through the
          marvels of His creation. They love to teach kids what it means to
          behold His glory through enjoying everything He has made.
        </p>
        <p>
          Al brings his extensive experience, expertise, and excitement for
          wildlife, eagles, swamp-stompin', exploring, botany, journaling,
          fishing, night-hiking, netting, birdwatching, birdlistenin, and so
          much more to Canoe Creation, and coupled with Amy’s fascination with
          these as well as singing to the Lord, cookin' on a campfire, and
          delight in the eyes of children, this makes for an instructive and
          meaningful time together in God’s creation.
        </p>
        <p>We invite you to come experience a day on the river with us!</p>
        <h2>Our team</h2>
        <p>
          While Al and Amy may have had the idea for sharing about God through
          river floats a long time ago, the rest of the Canoe Creation Community
          is the reason it all works so well today. So many people work as
          volunteers in the background doing work that needs done – from the
          Sternmen Board of Directors down to legions of envelope stuffers and
          facebook messengers. But the real heroes in Canoe Creation are our
          River Interns. Many of these young folk have been campers and
          participants of past trips who have loved the programs so much that
          they have joined in. They start with staff training in canoe skills,
          water safety, rappelling rigging, situational awareness, and river
          first aid. They develop their own abilities in leading teaching on
          creation topics, apologetics, and goofy games. Many deal with the more
          difficult tasks of marketing, web design, trip planning, and canoe
          vehicle maintenance. They invest heart and soul in the workings of
          Canoe Creation and it shows when you get to know them on gravel bar
          islands and woods walks.
        </p>
        <Image
          src={InternGroupPic}
          alt="Canoe Creation interns 2023"
          className="rounded-2xl"
        />
      </div>
    </div>
  </Chrome>
);

export default About;
