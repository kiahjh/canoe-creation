import React from 'react';
import cx from 'classnames';
import { UserIcon } from '@heroicons/react/24/outline';

interface Props {
  text: string;
  cite: string;
  className?: string;
}

const Testimonial: React.FC<Props> = ({ text, cite, className }) => {
  return (
    <div className={cx('bg-white rounded-3xl relative', className)}>
      <div className="w-14 h-14 bg-emerald-400 rounded-full absolute left-4 xs:-left-5 -top-8 xs:-top-5 flex justify-center items-center">
        <UserIcon className="h-7 text-white" />
      </div>
      <div className="p-8 pb-6 border border-b-0 border-slate-200 rounded-t-3xl bg-emerald-50/10">
        <p className="text-xl text-slate-500 font-medium">{text}</p>
      </div>
      <div className="px-8 py-4 flex justify-end bg-emerald-100 rounded-b-3xl">
        <span className="text-lg font-semibold text-emerald-600 italic">- {cite}</span>
      </div>
    </div>
  );
};

export default Testimonial;
