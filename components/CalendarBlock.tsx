import React from 'react';
import cx from 'classnames';
import { Raleway } from 'next/font/google';
import Link from 'next/link';
import Sparkle from './Sparkle';
import Calendar from './Calendar';

const raleway = Raleway({ subsets: ['latin'], weight: '800' });

interface Props {}

const CalendarBlock: React.FC<Props> = ({}) => {
  return (
    <div className={cx('flex flex-col p-20 relative')}>
      <Sparkle size={22} position={'left-10 bottom-24'} color={'cyan'} />
      <Sparkle size={20} position={'right-10 bottom-64'} color={'yellow'} />
      <Sparkle size={28} position={'right-4 bottom-72'} color={'emerald'} />
      <Sparkle size={18} position={'left-32 top-4'} color={'yellow'} />
      <Sparkle size={16} position={'right-32 top-40'} color={'yellow'} />
      <Sparkle size={20} position={'right-40 top-20'} color={'yellow'} />
      <Sparkle size={24} position={'right-48 top-32'} color={'cyan'} />
      <h2 className={cx('text-5xl', raleway.className)}>
        Calendar of events{' '}
        <span className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-transparent">
          for 2023
        </span>
      </h2>
      <p className="max-w-3xl mt-8 text-lg text-slate-600 mb-12">
        Below are our currently scheduled events for 2023. To request an aditional trip
        not already listed, feel free to{' '}
        <Link
          href={'/contact'}
          className="text-emerald-600 font-medium border-b-2 hover:border-b-4 hover:text-emerald-700 [transition:150ms] border-emerald-300"
        >
          contact us
        </Link>
        !
      </p>
      <Calendar />
    </div>
  );
};

export default CalendarBlock;
