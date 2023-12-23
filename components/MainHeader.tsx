import React from "react";
import cx from "classnames";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useScrollY } from "../lib/hooks";
import NavLink from "./NavLink";
import ProgramsDropdown from "./ProgramsDropdown";
import Logo from "./Logo";
import Button from "./Button";

interface Props {
  page: string;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const MainHeader: React.FC<Props> = ({ page, setSidebarOpen }) => {
  const scrollY = useScrollY();

  return (
    <header
      className={cx(
        `flex items-center justify-between p-4 relative z-[45]`,
        page !== `/` && `border-b border-slate-200`,
      )}
    >
      <Logo style={{ opacity: `${100 - scrollY * 2}%` }} />
      <button
        className="p-2 bg-slate-50 hover:bg-slate-100 active:scale-95 active:bg-slate-200 rounded-xl transition duration-100 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <Bars3Icon className="h-8 text-slate-600" />
      </button>
      <nav
        className={cx(
          `items-center py-2 px-4 space-x-2 rounded-2xl bg-white fixed right-4 transition duration-300 hidden lg:flex`,
          scrollY > 0 && `shadow-lg`,
        )}
      >
        <NavLink to="/" selected={page === `/`}>
          Home
        </NavLink>
        <ProgramsDropdown />
        <NavLink to="/about" selected={page === `/about`}>
          About
        </NavLink>
        <NavLink to="/gallery" selected={page === `/gallery`}>
          Gallery
        </NavLink>
        <NavLink to="/calendar" selected={page === `/calendar`}>
          Calendar
        </NavLink>
        <NavLink to="/blog" selected={page === `/blog`}>
          Blog
        </NavLink>
        <div className="w-2" />
        <Button
          type="link"
          to={process.env.NEXT_PUBLIC_PAYPAL_DONATION_URL || `/`}
          color="primary"
          size="sm"
          icon="paypal"
          openInNewTab
        >
          Donate
        </Button>
      </nav>
    </header>
  );
};

export default MainHeader;
