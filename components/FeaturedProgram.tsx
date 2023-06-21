import React from 'react';
import cx from 'classnames';
import { CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useIntersectionObserver } from '../lib/hooks';
import Button from './Button';

interface Props {
  price: number;
  ageRange: [number, number];
  name: string;
  description: string;
  img: string;
  slug: string;
}

const FeaturedProgram: React.FC<Props> = ({
  price,
  ageRange,
  name,
  description,
  img,
  slug,
}) => {
  const { intersected, ref } = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.9,
  });

  return (
    <div
      className={cx(
        'bg-white rounded-3xl overflow-hidden shadow-xl transition duration-500',
        intersected ? 'opacity-100' : 'lg+:translate-x-12 lg+:opacity-0',
      )}
      ref={ref}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full h-52 sm:h-72 bg-center bg-cover"
      />
      <div className="p-6 sm:p-8">
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row lg+:flex-col lg+:space-y-2 xl:flex-row xl:space-y-0 justify-between items-start">
          <h3 className={cx('text-2xl sm:text-3xl font-inter')}>{name}</h3>
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-sm sm:text-base text-slate-600">
              <CurrencyDollarIcon className="h-5 sm:h-6 text-slate-500 mr-1" />${price} /
              person
            </span>
            <span className="flex items-center text-sm sm:text-base text-slate-600">
              <UserGroupIcon className="h-5 sm:h-6 text-slate-500 mr-1" />
              Ages {ageRange[0]} - {ageRange[1]}
            </span>
          </div>
        </div>
        <p className="mt-4 text-slate-600 text-[15px] sm:text-[17px]">{description}</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-end p-6 sm:p-8 pt-0 sm:space-x-6 space-y-4 sm:space-y-0">
        <Button type="link" to="/calendar" size="md" color="secondary" icon="calendar">
          View calendar
        </Button>
        <Button
          type="link"
          to={`/programs/${slug}`}
          size="md"
          color="primary"
          icon="arrow-circle-right"
        >
          Find out more
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProgram;
