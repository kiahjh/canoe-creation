import Link from "next/link";
import React from "react";
import cx from "classnames";

interface Props {
  children: React.ReactNode;
  to: string;
  selected: boolean;
}

const NavLink: React.FC<Props> = ({ children, to, selected }) => (
  <Link
    href={to}
    className={cx(
      `px-4 py-2 font-medium cursor-pointer select-none transition duration-100 flex items-center active:scale-95`,
      selected
        ? `text-slate-800 hover:text-slate-900 border-b-2 border-emerald-400`
        : `text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-xl active:bg-slate-100`,
    )}
  >
    {children}
  </Link>
);

export default NavLink;
