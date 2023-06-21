import React from 'react';
import { GetStaticProps } from 'next';
import IslandImage from '../../public/island.jpg';
import RappellingImage from '../../public/rappelling.jpg';
import CampsiteImage from '../../public/campsite.jpg';
import ProgramTemplate from '../../components/ProgramTemplate';
import { getAllEvents } from '../../lib/getObjects';
import { CCEvent } from '../../lib/types';

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
        'The Canoe Creation River School is for the nature enthusiast that is serious about learning about the wonders of nature and how it shows the wonder of the Creator. The study of nature gives us a window to see the wonders of the Creator of it all and His nature. The Bible tells us that we are without excuse if we cannot see that God made things in the wild world around us and that those wonders can teach us about the character of the God of heaven and earth (Romans 1:20). People will often go to wild places just to sense those characteristics even if they do not admit that they are God’s qualities.'
      }
      quote={{
        text: `I was deeply encouraged by the Parker’s enthusiasm and appreciation for God’s creation! We explored things out on the river that I never would have noticed on my own.  Al has a wonderful way of teaching about nature, all the while pointing to the One who made it all.`,
        cite: `Jessica H, homeschool mom`,
      }}
      paragraph2="Study of the other tribes of creation (birds, flowers, beasts, and bugs) and even the stars and earth itself give us clues into God’s thoughts. From the miracles in the microscope to the overwhelming complication of relationships found in ecosystems, we can learn more about the One who placed us here, messages He can teach us from what He spoke and it was. Times of quiet and times of water fun are added to each river run in addition to the “currents” or River Classes listed below."
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
      images={[IslandImage.src, CampsiteImage.src, RappellingImage.src, 'foo']}
    />
  );
};

export default RiverSchools;
