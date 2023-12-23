import React from "react";
import Image from "next/image";
import Chrome from "../components/Chrome";
import InternGroupPic from "../public/river-schools/intern-group-2023.jpg";
import FoggyCanoesPic from "../public/river-schools/foggy-canoes.jpg";
import ParkerFamCampingPic from "../public/about/parker-family-camping.jpg";

const About: React.FC = () => (
  <Chrome
    page="/about"
    title="Canoe Creation | About"
    description="All about the history, mission, and current status of Canoe Creation."
  >
    <div className="flex justify-center items-center py-8 xs:py-12 sm:py-20 px-6 xs:px-8 sm:px-12 md:px-20">
      <div className="absolute w-full lg:w-5/6 h-1/2 bg-emerald-50 rounded-3xl" />
      <div className="prose prose-p:text-slate-600 bg-white py-8 sm:py-12 md:py-16 px-6 sm:px-12 md:px-16 max-w-4xl rounded-3xl relative bg-opacity-70 backdrop-blur-3xl shadow text-justify">
        <h1>About Canoe Creation</h1>
        <div className="w-52 h-52 float-right flex justify-center items-center ml-8 mb-4">
          <Image
            src={FoggyCanoesPic}
            alt="Two canoes"
            className="float-right rounded-2xl object-cover object-center h-full w-full"
          />
        </div>
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
          fishing, night-hiking, netting, birdwatching, birdlistenin', and so
          much more to Canoe Creation, and coupled with Amy’s fascination with
          these as well as singing to the Lord, cookin' on a campfire, and
          delight in the eyes of children, this makes for an instructive and
          meaningful time together in God’s creation.
        </p>
        <p>We invite you to come experience a day on the river with us!</p>
        <h2>The vision</h2>
        <p className="pl-4 border-l-4 italic">
          In my youth, I was fascinated with all things growing, flowing, and
          living in the wilds. I had this incredible thirst to know who they
          were. That desire took me to studies of wildlife and work with
          re-introducing endangered specis. But it was not until I turned Christ
          that I realized the joy I feel in the wilderness. God had used the
          created order of His world to reinforce His glory in my own heart. I
          began to see the Maker behind each living thing that I had learned to
          know like a friend. Hosea [4:3] tells us that animals are disappearing
          not because of ... capitalism, or industrialism, or other “-isms” ...
          but because “there is no acknowledgement of God in the land.”
        </p>
        <p className="pl-4 border-l-4 italic">
          While watching a nest of eagles on a hillside awakening to spring, I
          realized that young people need time in nature to understand God, the
          Creator. What better way to help them take hold of a faith in the
          Creator and Redeemer than to get them out in it? What better way to
          help them hold on to their faith than to help them see God in what
          surrounds them every day?
        </p>
        <p className="pl-4 border-l-4 italic">
          Psalm 71:17 convicted me of a calling: “Since my youth, O God, you
          have taught me, and to this day I declare your marvelous deeds.”
        </p>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:gap-12 bg-emerald-50 shadow-inner rounded-2xl p-4 xs:p-6 sm:p-8 lg:pl-12 my-8">
          <p className="text-center lg:text-left">
            Our family had spent most of our vacations on river trips and had
            often shared the experiences with friends and families. We wondered,
            “How can we make these river experiences available to others?”
          </p>
          <Image
            src={ParkerFamCampingPic}
            alt="Parker family camping"
            className="w-72 h-72 rounded-2xl m-0 object-cover object-center"
          />
        </div>
        <p className="pl-4 border-l-4 italic">
          We've thought of starting a River School — a camp that is mobile and
          makes a classroom out of passing shores. Its purpose is to be able to
          waken people to the glorious riches of Creation — right out our back
          doors...
        </p>
        <div className="font-semibold flex justify-end text-lg text-slate-700 italic">
          - Al Parker's journal
        </div>
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
