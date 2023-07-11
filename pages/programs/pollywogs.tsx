import React from 'react';
import { GetStaticProps } from 'next';
import ProgramTemplate from '../../components/ProgramTemplate';
import { getAllEvents } from '../../lib/getObjects';
import { CCEvent } from '../../lib/types';
import getImages from '../../lib/get-images';

export const getStaticProps: GetStaticProps = async () => {
  const events = (await getAllEvents()).filter(
    (event) => event.type === 'pollywog_float',
  );
  const images = getImages(`**/public/pollywogs/*.jpg`);
  return {
    props: { events, images },
  };
};

interface Props {
  events: CCEvent[];
  images: string[];
}

const Pollywogs: React.FC<Props> = ({ events, images }) => {
  return (
    <ProgramTemplate
      title={'Pollywog Float'}
      page={'/pollywogs'}
      events={events}
      paragraph1={
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo vel tempora animi dignissimos doloremque, architecto quidem totam sint ut, fugiat repellendus? Veritatis saepe quam rem libero magnam, assumenda nemo dolores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsum dolor aspernatur cum possimus iste repellendus repudiandae ad corrupti. Sint, molestias quod? Illum sint doloremque magni nisi perferendis sed? Facere? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolorem, architecto, tempore placeat est aperiam soluta minus omnis veritatis facilis praesentium quam itaque vero reiciendis, fuga velit. Illum, animi consequatur!'
      }
      quote={{
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, blanditiis et, sapiente neque placeat sunt est, voluptas id corrupti ex aut dolor quod architecto suscipit obcaecati ullam illum beatae incidunt.`,
        cite: `Homeschool mom`,
      }}
      paragraph2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet laboriosam cumque consequatur inventore iusto iste aut quas, enim cupiditate! Quisquam voluptas veniam reiciendis facere numquam fugiat suscipit, aperiam eaque cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam necessitatibus aliquid magnam, tempore quae culpa quisquam eum explicabo distinctio laborum dolorum, natus eos delectus amet temporibus eius consequatur beatae provident! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit voluptatem provident explicabo at perferendis ipsum, mollitia cupiditate aperiam magnam recusandae debitis! Odio a deleniti iusto libero, consectetur pariatur ducimus ex!"
      numDaysRange={{
        min: 1,
        max: 2,
      }}
      ageRange={{
        min: 8,
        max: 12,
      }}
      priceRange={{
        min: 45,
        max: 90,
      }}
      images={images}
    />
  );
};

export default Pollywogs;
