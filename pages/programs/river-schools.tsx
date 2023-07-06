import React from 'react';
import { GetStaticProps } from 'next';
import ProgramTemplate from '../../components/ProgramTemplate';
import { getAllEvents } from '../../lib/getObjects';
import { CCEvent } from '../../lib/types';

import IslandImage from '../../public/island.jpg';
import CampsiteImage from '../../public/campsite.jpg';
import BoatBowsImage from '../../public/boat-bows.jpg';
import BurmaImage from '../../public/burma.jpg';
import CanoeAwayImage from '../../public/canoe-away.jpg';
import CatfishImage from '../../public/catfish.jpg';
import CircleUnderTarpImage from '../../public/circle-under-tarp.jpg';
import CloudyCanoeingImage from '../../public/cloudy-canoeing.jpg';
import CottonwoodFuzziesImage from '../../public/cottonwood-fuzzies.jpg';
import DockImage from '../../public/dock.jpg';
import FoggyCanoesImage from '../../public/foggy-canoes.jpg';
import GravelBarLunchImage from '../../public/gravel-bar-lunch.png';
import GroupImage from '../../public/group.jpg';
import HappyCampersUnderTarpImage from '../../public/happy-campers-under-tarp.jpg';
import InternGroup2023Image from '../../public/intern-group-2023.jpg';
import IslandLectureImage from '../../public/island-lecture.jpg';
import KidPointingImage from '../../public/kid-pointing.jpg';
import LandingImage from '../../public/landing.jpg';
import LunaMothImage from '../../public/luna-moth.jpg';
import MusselsInHandsImage from '../../public/mussels-in-hands.jpg';
import MusselsUnderwaterImage from '../../public/mussels-underwater.jpg';
import MusselLessonImage from '../../public/mussel-lesson.jpg';
import PaddlesUpImage from '../../public/paddles-up.jpg';
import PurplePimplebacksImage from '../../public/purple-pimplebacks.jpg';
import RaftImage from '../../public/raft.jpg';
import Raft2Image from '../../public/raft-2.jpg';
import RiverDramaShotImage from '../../public/river-drama-shot.jpg';
import SeineNetImage from '../../public/seine-net.jpg';
import ShellyMedowImage from '../../public/shelly-medow.jpg';
import SoftshellImage from '../../public/softshell.jpg';
import SurvivorsImage from '../../public/survivors.jpg';
import TumblinCampImage from '../../public/tumblin-camp.jpg';
import TumblinFireImage from '../../public/tumblin-fire.jpg';
import UnderBridgeImage from '../../public/under-bridge.jpg';
import WadingImage from '../../public/wading.jpg';
import WaterRunnersImage from '../../public/water-runners.jpg';
import WatermelonFootballImage from '../../public/watermelon-football.jpg';
import WetCampersImage from '../../public/wet-campers.jpg';

const images = [
  IslandImage.src,
  RiverDramaShotImage.src,
  FoggyCanoesImage.src,
  CampsiteImage.src,
  BoatBowsImage.src,
  BurmaImage.src,
  CanoeAwayImage.src,
  CatfishImage.src,
  CircleUnderTarpImage.src,
  CloudyCanoeingImage.src,
  CottonwoodFuzziesImage.src,
  DockImage.src,
  GravelBarLunchImage.src,
  GroupImage.src,
  HappyCampersUnderTarpImage.src,
  InternGroup2023Image.src,
  IslandLectureImage.src,
  KidPointingImage.src,
  LandingImage.src,
  LunaMothImage.src,
  MusselsInHandsImage.src,
  MusselsUnderwaterImage.src,
  MusselLessonImage.src,
  PaddlesUpImage.src,
  PurplePimplebacksImage.src,
  RaftImage.src,
  Raft2Image.src,
  SeineNetImage.src,
  ShellyMedowImage.src,
  SoftshellImage.src,
  SurvivorsImage.src,
  TumblinCampImage.src,
  TumblinFireImage.src,
  UnderBridgeImage.src,
  WadingImage.src,
  WaterRunnersImage.src,
  WatermelonFootballImage.src,
  WetCampersImage.src,
];

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter((event) => event.type === 'river_school');
  return {
    props: { events },
  };
};

interface Props {
  events: CCEvent[];
}

const RiverSchools: React.FC<Props> = ({ events }) => {
  return (
    <ProgramTemplate
      title={'River Schools'}
      page={'/river-schools'}
      events={events}
      paragraph1={
        'Get outside, get into the river, and join us for this floating classroom experience that you’ll never forget! While paddling down the current and navigating the waters, you’ll have the opportunity to learn about everything around you – and most importantly, about Him who created it, and why. Take a closer look at riparian wildlife than you’ve ever seen before and be amazed.'
      }
      quote={{
        text: `Al’s teaching makes creation come alive before our eyes! I’ve never seen my kids so excited about plants and animals, and with each new discovery they make on these trips, they just want to learn more. It’s like the unfolding of a great mystery that God has laid before us, and as Al leads the way and points things out along the river, the kids have the opportunity to look more closely and deeply consider   God’s creation. The sense of awe on their faces is priceless.`,
        cite: `Jessie, homeschool mom`,
      }}
      paragraph2="We’ll start the day with a quick review of water safety, then launch out onto the river in our canoes. Paddling downstream, we’ll have the opportunity to make frequent stops along sandbars to look for freshwater mussels, killdeer nests, and sleeping fawns. We’ll turn over river rocks to discover crayfish, water pennies, and caddisfly larvae. While eating our packed lunches on an island, we’ll listen to Al talk about God’s creation, and experience it close-up for ourselves. Netting fish, identifying mussels, observing a bald eagle nest, listening for birds…..this and much more will make up the better part of the day as we make our way downstream, finally to pull our canoes ashore and shuttle back to where we started. You’ll leave the river with new things to consider, a renewed interest in what you see around you, and a sense of awe for the One who made it all."
      numDaysRange={{
        min: 1,
        max: 3,
      }}
      ageRange={{
        min: 12,
        max: 20,
      }}
      priceRange={{
        min: 65,
        max: 140,
      }}
      images={images}
    />
  );
};

export default RiverSchools;
