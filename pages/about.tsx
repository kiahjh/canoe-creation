import React from 'react';
import Chrome from '../components/Chrome';
import Testimonial from '../components/Testimonial';

const About: React.FC = () => {
  return (
    <Chrome page="/about">
      <div className="flex justify-center items-center py-12 sm:py-20 px-6 xs:px-8 sm:px-12 md:px-20">
        <div className="absolute w-full lg:w-5/6 h-1/2 bg-emerald-50 rounded-3xl" />
        <div className="prose prose-p:text-slate-600 bg-slate-50 py-12 md:py-16 px-6 sm:px-12 md:px-16 max-w-3xl rounded-3xl relative bg-opacity-70 backdrop-blur-3xl shadow">
          <h1>About Canoe Creation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nemo
            magni neque cumque hic dolorem ducimus error commodi autem modi praesentium
            aperiam maxime ea dignissimos repellat atque natus, assumenda voluptatum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ea atque
            nostrum architecto blanditiis suscipit, veritatis cum alias iure in a error
            hic. Temporibus facere voluptatem eveniet error tempore aliquid! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatibus! Ab
            totam doloribus possimus labore laborum dolore quam tenetur pariatur,
            aspernatur quasi rerum consequatur assumenda molestiae doloremque vero ipsa
            eligendi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            laudantium temporibus deleniti officiis repellat at, pariatur nulla ullam quod
            culpa autem ea nesciunt aliquid ratione, incidunt quasi earum, totam
            doloribus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            voluptates ducimus? Quidem voluptate in rerum repellendus? Laborum corrupti
            velit animi molestiae, dolor non debitis minima labore quaerat rerum nesciunt
            incidunt?
          </p>
          <Testimonial
            text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nemo magni neque cumque hic dolorem ducimus error commodi autem modi praesentium aperiam maxime ea dignissimos repellat atque natus`}
            cite={'John Doe'}
            className="mb-8 mt-12 shadow"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nemo
            magni neque cumque hic dolorem ducimus error commodi autem modi praesentium
            aperiam maxime ea dignissimos repellat atque natus, assumenda voluptatum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ea atque
            nostrum architecto blanditiis suscipit, veritatis cum alias iure in a error
            hic. Temporibus facere voluptatem eveniet error tempore aliquid! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatibus! Ab
            totam doloribus possimus labore laborum dolore quam tenetur pariatur,
            aspernatur quasi rerum consequatur assumenda molestiae doloremque vero ipsa
            eligendi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            laudantium temporibus deleniti officiis repellat at, pariatur nulla ullam quod
            culpa autem ea nesciunt aliquid ratione, incidunt quasi earum, totam
            doloribus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            voluptates ducimus? Quidem voluptate in rerum repellendus? Laborum corrupti
            velit animi molestiae, dolor non debitis minima labore quaerat rerum nesciunt
            incidunt?
          </p>
          <h2>Our team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nemo
            magni neque cumque hic dolorem ducimus error commodi autem modi praesentium
            aperiam maxime ea dignissimos repellat atque natus, assumenda voluptatum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio ea atque
            nostrum architecto blanditiis suscipit, veritatis cum alias iure in a error
            hic. Temporibus facere voluptatem eveniet error tempore aliquid! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatibus! Ab
            totam doloribus possimus labore laborum dolore quam tenetur pariatur,
            aspernatur quasi rerum consequatur assumenda molestiae doloremque vero ipsa
            eligendi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            laudantium temporibus deleniti officiis repellat at, pariatur nulla ullam quod
            culpa autem ea nesciunt aliquid ratione, incidunt quasi earum, totam
            doloribus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            voluptates ducimus? Quidem voluptate in rerum repellendus? Laborum corrupti
            velit animi molestiae, dolor non debitis minima labore quaerat rerum nesciunt
            incidunt?
          </p>
        </div>
      </div>
    </Chrome>
  );
};

export default About;
