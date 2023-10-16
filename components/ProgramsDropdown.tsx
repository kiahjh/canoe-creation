import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import cx from "classnames";
import Link from "next/link";

const ProgramsDropdown: React.FC = () => (
  <Menu as="div" className="relative text-left flex flex-col items-center">
    <div className="flex">
      <span
        className={cx(
          `font-medium cursor-pointer select-none transition duration-100 flex items-center hover:bg-slate-50 rounded-xl`,
          `text-slate-500 hover:text-slate-700`,
        )}
      >
        <Link
          href="/programs"
          className="pl-4 py-2 transition duration-100 active:scale-95"
        >
          Programs
        </Link>
        <Menu.Button>
          {({ open }) => (
            <span className="self-stretch py-2 px-2 hover:bg-slate-100 transition duration-100 rounded-lg my-2 mx-1 ml-2 active:scale-95 active:bg-slate-200/70">
              <i
                className={cx(
                  `fas fa-chevron-down transition duration-200`,
                  open && `-rotate-180`,
                )}
              />
            </span>
          )}
        </Menu.Button>
      </span>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 -translate-y-1"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 -translate-y-1"
    >
      <Menu.Items className="absolute z-10 mt-14 w-56 rounded-xl bg-white shadow-lg focus:outline-none overflow-hidden p-2">
        <LinkOption to="/programs/river-schools">River schools</LinkOption>
        <LinkOption to="/programs/rappelling">Rappelling</LinkOption>
        <LinkOption to="/programs/river-rangers">River Rangers</LinkOption>
        <LinkOption to="/programs/pollywogs">Pollywogs</LinkOption>
        <LinkOption to="/programs/little-solomons">
          Little Solomon Classes
        </LinkOption>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default ProgramsDropdown;

interface LinkOptionProps {
  to: string;
  children: React.ReactNode;
}

const LinkOption: React.FC<LinkOptionProps> = ({ to, children }) => (
  <Menu.Item>
    {({ active }) => (
      <Link
        href={to}
        className={cx(
          active ? `bg-emerald-50 text-emerald-700` : `text-slate-500`,
          `block px-4 py-2 font-medium rounded-xl active:scale-95 transition duration-100`,
        )}
      >
        {children}
      </Link>
    )}
  </Menu.Item>
);
