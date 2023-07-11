import React from 'react';
import Chrome from '../components/Chrome';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {},
  };
};

interface Props {}

const Gallery: React.FC = () => {
  return (
    <Chrome page="/gallery">
      <div className="p-20">
        <h1 className="font-inter text-5xl">Gallery</h1>
        <div></div>
      </div>
    </Chrome>
  );
};

export default Gallery;
