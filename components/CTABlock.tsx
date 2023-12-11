import React from "react";
import Button from "./Button";

const CTABlock: React.FC = () => (
  <section className="px-4 sm:px-8 pt-8 pb-16 -mt-12 relative bg-white">
    <div className="bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-3xl p-8 xs:p-12 sm:p-16 md:p-20 flex flex-col justify-center items-center">
      <h2 className="font-raleway text-4xl md:text-5xl text-white text-center leading-[1.2em]">
        Come{` `}
        <span className="bg-gradient-to-r from-cyan-800 to-cyan-950 text-transparent bg-clip-text">
          Canoe Creation
        </span>
        {` `}
        With Us!
      </h2>
      <p className="sm:text-lg text-white/80 text-center mt-6 max-w-6xl">
        Ever felt the fascination of a toad vibrating in your hand? Ever wander
        through lush spring flowers and feel like there really is hope? Ever
        wonder about not just the names of trees, but of their character? Ever
        sit alongside a stream and have cares of this world washed from you?
        Ever revel in the power of a storm because you know the One that made
        it? Ever think about spending some time in a quiet place the way Jesus
        did?
      </p>
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-center gap-4 sm:gap-8 w-full">
        <Button
          type="link"
          to="/gallery"
          color="primary"
          className="!shadow-lg"
          size="lg"
          icon="grid"
        >
          View gallery
        </Button>
        <Button
          type="link"
          to="/programs"
          color="secondary"
          className="!bg-emerald-100 !text-emerald-600 hover:!bg-emerald-200"
          size="lg"
          icon="arrow-circle-right"
          shadow
        >
          View programs
        </Button>
      </div>
    </div>
  </section>
);

export default CTABlock;
