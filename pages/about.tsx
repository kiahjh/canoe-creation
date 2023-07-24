import React from 'react';
import Chrome from '../components/Chrome';
import Testimonial from '../components/Testimonial';

const About: React.FC = () => {
  return (
    <Chrome page="/about">
      <div className="flex justify-center items-center py-8 xs:py-12 sm:py-20 px-6 xs:px-8 sm:px-12 md:px-20">
        <div className="absolute w-full lg:w-5/6 h-1/2 bg-emerald-50 rounded-3xl" />
        <div className="prose prose-p:text-slate-600 bg-white py-8 sm:py-12 md:py-16 px-6 sm:px-12 md:px-16 max-w-3xl rounded-3xl relative bg-opacity-70 backdrop-blur-3xl shadow">
          <h1>About Canoe Creation</h1>
          <p>
            As a non-profit organization founded in 2008, Canoe Creation exists to get
            kids outside and into creation. More than anything, Al & Amy Parker have a
            heart for God and for making Him known through the marvels of His creation.
            They love to teach kids what it means to behold His glory through enjoying
            everything He has made.
          </p>
          <p>
            Al brings his extensive experience in falconry, botany, and wildlife
            conservation to Canoe Creation, and coupled with Amy’s love of children and
            worship, this makes for an instructive and meaningful time together in God’s
            creation.
          </p>
          <p>We invite you to come experience a day on the river with us!</p>
          <h2>Our team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto
            aliquam dignissimos voluptas similique inventore est quam, iure aut. Facere
            voluptatem autem ipsam repudiandae ipsum exercitationem soluta sapiente
            eveniet esse. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
            repudiandae nobis praesentium numquam delectus maxime quasi necessitatibus,
            pariatur iusto beatae non asperiores ratione. Est officia labore pariatur
            alias sapiente laborum? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid iusto veritatis eaque voluptatum magnam vel facere excepturi
            recusandae officiis, eveniet ducimus quisquam magni sint dolor, in, dolores ea
            omnis. Culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            architecto, cum dolorum eos consequatur adipisci cupiditate quo aut quos
            repudiandae laborum! Quasi et alias cupiditate nobis voluptas quos
            consequuntur excepturi! lorem
          </p>
        </div>
      </div>
    </Chrome>
  );
};

export default About;
