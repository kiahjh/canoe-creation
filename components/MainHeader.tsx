import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import NavLink from './NavLink';
import ProgramsDropdown from './ProgramsDropdown';
import { useScrollY } from '../lib/hooks';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Props {
  page: string;
}

const MainHeader: React.FC<Props> = ({ page }) => {
  const scrollY = useScrollY();

  return (
    <header className={cx('flex items-center justify-between p-4 relative z-20')}>
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="Canoe Creation logo"
          className="w-20"
        />
        <div className="flex flex-col item-start ml-2">
          <span className="text-2xl font-raleway -mb-2 text-slate-700">Canoe</span>
          <span className="text-3xl font-raleway bg-gradient-to-br from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
            Creation
          </span>
        </div>
      </Link>
      <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition duration-100 md:hidden">
        <Bars3Icon className="h-8 text-slate-600" />
      </button>
      <nav
        className={cx(
          'items-center py-2 px-4 space-x-2 rounded-xl bg-white/90 backdrop-blur-lg fixed right-4 transition duration-300 hidden md:flex',
          scrollY > 0 && 'shadow-lg',
        )}
      >
        <NavLink to="/" selected={page === '/'}>
          Home
        </NavLink>
        <ProgramsDropdown />
        <NavLink to="/calendar" selected={page === '/calendar'}>
          Calendar
        </NavLink>
        <NavLink to="/blog" selected={page === '/blog'}>
          Blog
        </NavLink>
        <NavLink to="/contact" selected={page === '/contact'}>
          Contact us
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
