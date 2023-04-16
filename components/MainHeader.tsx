import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import NavLink from './NavLink';
import ProgramsDropdown from './ProgramsDropdown';
import { useScrollY } from '../lib/hooks';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface Props {}

const MainHeader: React.FC<Props> = ({}) => {
  const scrollY = useScrollY();

  return (
    <header className="flex items-center justify-between p-4 relative z-20">
      <div>
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Canoe Creation logo"
          className="w-20"
        />
      </div>
      <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition duration-100 md:hidden">
        <Bars3Icon className="h-8 text-slate-600" />
      </button>
      <nav
        className={cx(
          'items-center py-2 px-4 space-x-2 rounded-xl bg-white/90 backdrop-blur-lg fixed right-4 transition duration-300 hidden md:flex',
          scrollY > 0 && 'shadow-lg',
        )}
      >
        <NavLink to="/" selected={true}>
          Home
        </NavLink>
        <ProgramsDropdown />
        <NavLink to="/" selected={false}>
          Calendar
        </NavLink>
        <NavLink to="/" selected={false}>
          Blog
        </NavLink>
        <NavLink to="/" selected={false}>
          Contact us
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;