import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import NavLink from './NavLink';
import ProgramsDropdown from './ProgramsDropdown';
import { useScrollY } from '../lib/hooks';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Logo from './Logo';

interface Props {
  page: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const MainHeader: React.FC<Props> = ({ page, sidebarOpen, setSidebarOpen }) => {
  const scrollY = useScrollY();

  return (
    <header
      className={cx(
        'flex items-center justify-between p-4 relative z-20',
        page !== `/` && `border-b border-slate-200`,
      )}
    >
      <Logo />
      <button
        className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition duration-100 md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
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
        <NavLink to="/about" selected={page === '/about'}>
          About
        </NavLink>
        <ProgramsDropdown />
        <NavLink to="/calendar" selected={page === '/calendar'}>
          Calendar
        </NavLink>
        <NavLink to="/blog" selected={page === '/blog'}>
          Blog
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
