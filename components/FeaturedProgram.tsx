import React from 'react';
import cx from 'classnames';
import { CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useIntersectionObserver } from '../lib/hooks';
import Button from './Button';
import { formatAgeRange } from '../lib/strings';

interface Props {
  title: string;
  slug: string;
  description: string;
  ageRange: {
    min: number | null;
    max: number | null;
  };
  priceRange: {
    min: number;
    max: number | null;
  };
  image: string;
  fadeIn?: boolean;
}

const FeaturedProgram: React.FC<Props> = ({
  title,
  description,
  ageRange,
  priceRange,
  image,
  slug,
  fadeIn = false,
}) => {
  const { intersected, ref } = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.9,
  });

  return (
    <div
      className={cx(
        'bg-white rounded-3xl overflow-hidden shadow-xl transition duration-500',
        intersected || !fadeIn ? 'opacity-100' : 'lg+:translate-x-12 lg+:opacity-0',
      )}
      ref={ref}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-52 sm:h-72 bg-center bg-cover"
      />
      <div className="p-6 sm:p-8">
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row lg+:flex-col lg+:space-y-2 2xl:flex-row 2xl:space-y-0 justify-between items-start">
          <h3 className={cx('text-2xl sm:text-3xl font-inter')}>{title}</h3>
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-sm sm:text-base text-slate-600">
              <CurrencyDollarIcon className="h-5 sm:h-6 text-slate-500 mr-1" />
              <span>
                {`$${priceRange.min}${priceRange.max ? `-$${priceRange.max}` : ``} /
                person`}
              </span>
            </span>
            <span className="flex items-center text-sm sm:text-base text-slate-600">
              <UserGroupIcon className="h-5 sm:h-6 text-slate-500 mr-1" />
              {formatAgeRange(ageRange.min, ageRange.max)}
            </span>
          </div>
        </div>
        <p className="mt-4 text-slate-600 text-[15px] sm:text-[17px]">{description}</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-end p-6 sm:p-8 pt-0 sm:pt-0 sm:space-x-6 space-y-4 sm:space-y-0">
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
