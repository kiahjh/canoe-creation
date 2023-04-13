import React from 'react';
import cx from 'classnames';
import { Inter } from 'next/font/google';
import {
  ArrowRightCircleIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useIntersectionObserver } from '../lib/hooks';

const inter = Inter({ subsets: ['latin'], weight: '700' });

interface Props {
  price: number;
  ageRange: [number, number];
  name: string;
  description: string;
  img: string;
}

const FeaturedProgram: React.FC<Props> = ({
  price,
  ageRange,
  name,
  description,
  img,
}) => {
  const { intersected, ref } = useIntersectionObserver({
    rootMargin: '0px',
    threshold: 0.8,
  });

  return (
    <div
      className={cx(
        'bg-white rounded-2xl overflow-hidden shadow-xl transition duration-500',
        intersected ? 'opacity-100' : 'translate-x-40 opacity-0',
      )}
      ref={ref}
    >
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full h-72 bg-center bg-cover"
      />
      <div className="p-8">
        <div className="flex justify-between items-start">
          <h3 className={cx('text-3xl font-bold', inter.className)}>{name}</h3>
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-base text-slate-600">
              <CurrencyDollarIcon className="h-6 text-slate-500 mr-1" />${price} / person
            </span>
            <span className="flex items-center text-base text-slate-600">
              <UserGroupIcon className="h-6 text-slate-500 mr-1" />
              Ages {ageRange[0]} - {ageRange[1]}
            </span>
          </div>
        </div>
        <p className="mt-4 text-slate-600 text-[17px]">{description}</p>
      </div>
      <div className="flex items-center justify-end p-8 pt-0 space-x-6">
        <Link
          href="#"
          className="flex items-center bg-emerald-50 px-6 py-3 rounded-full text-emerald-600 font-medium hover:bg-emerald-100 transition duration-100"
        >
          <CalendarIcon className="h-6 mr-2" />
          View calendar
        </Link>
        <Link
          href="#"
          className="flex items-center bg-emerald-500 px-6 py-3 rounded-full text-white font-medium hover:bg-emerald-600 transition duration-100"
        >
          <ArrowRightCircleIcon className="h-6 mr-2" />
          Find out more
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProgram;
