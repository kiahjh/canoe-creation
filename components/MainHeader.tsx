import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import NavLink from './NavLink';
import ProgramsDropdown from './ProgramsDropdown';

interface Props {}

const MainHeader: React.FC<Props> = ({}) => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

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
      <nav
        className={cx(
          'flex items-center py-2 px-4 space-x-2 rounded-xl bg-white/90 backdrop-blur-lg fixed right-4 transition duration-300',
          scrollY > 0 && 'shadow-lg',
        )}
      >
        <NavLink to="/" selected={true}>
          Home
        </NavLink>
        <NavLink to="/" selected={false}>
          About
        </NavLink>
        <ProgramsDropdown />
        <NavLink to="/" selected={false}>
          Contact us
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
