import React, { useState } from 'react';
import cx from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Props {
  images: string[];
  className?: string;
}

const Carousel: React.FC<Props> = ({ images, className }) => {
  const [curIndex, setCurIndex] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <div
        className={cx(
          'rounded-3xl bg-slate-200 h-128 flex p-4 relative overflow-hidden w-full',
          className,
        )}
      >
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurIndex(index)}
            className={cx(
              'rounded-3xl bg-center bg-cover [transition:400ms] scale-90 shadow-inner relative overflow-hidden opacity-0 hover:scale-95 cursor-pointer',
              index === curIndex && `[flex-grow:1.25] !opacity-100 mx-4 !scale-100`,
              index === curIndex - 1 &&
                `[flex-grow:0.5] !opacity-100 mx-2 !scale-95 hover:!scale-100`,
              index === curIndex - 2 && `[flex-grow:0.25] !opacity-60 mx-2`,
              index === curIndex + 1 &&
                `[flex-grow:0.5] !opacity-100 mx-2 !scale-95 hover:!scale-100`,
              index === curIndex + 2 && `[flex-grow:0.25] !opacity-60 mx-2`,
            )}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-8 mt-4 p-4 rounded-full bg-slate-200/80">
        <button
          className="bg-slate-300 px-4 py-2 text-lg flex items-center justify-center rounded-full gap-2 w-40 shrink-0 font-medium text-slate-700 transition duration-150 hover:bg-slate-400/50"
          onClick={() => setCurIndex(curIndex === 0 ? images.length - 1 : curIndex - 1)}
        >
          <ChevronLeftIcon className="w-5" />
          <span>Previous</span>
        </button>
        <span className="font-medium text-slate-500 w-20 flex justify-center items-center">
          {curIndex + 1} of {images.length}
        </span>
        <button
          className="bg-slate-300 px-4 py-2 text-lg flex items-center justify-center rounded-full gap-2 w-40 shrink-0 font-medium text-slate-700 transition duration-150 hover:bg-slate-400/50"
          onClick={() => setCurIndex(curIndex === images.length - 1 ? 0 : curIndex + 1)}
        >
          <span>Next</span>
          <ChevronRightIcon className="w-5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
