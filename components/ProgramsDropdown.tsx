import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import cx from 'classnames';
import Link from 'next/link';

const ProgramsDropdown: React.FC = () => {
  return (
    <Menu as="div" className="relative text-left flex flex-col items-center">
      <div>
        <Menu.Button>
          {({ open }) => (
            <span
              className={cx(
                'px-4 py-2 font-medium cursor-pointer select-none transition duration-100 flex items-center',
                'text-slate-500 hover:text-slate-700',
              )}
            >
              Programs
              <i
                className={cx(
                  'ml-2 fas fa-chevron-down transition duration-200',
                  open && '-rotate-180',
                )}
              />
            </span>
          )}
        </Menu.Button>
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
        <Menu.Items className="absolute z-10 mt-14 w-56 origin-top-right rounded-xl bg-white/90 shadow-lg focus:outline-none overflow-hidden backdrop-blur-sm">
          <LinkOption to="/programs/river-rangers">River Rangers</LinkOption>
          <LinkOption to="/programs/pollywogs">Pollywogs</LinkOption>
          <LinkOption to="/programs/river-schools">River schools</LinkOption>
          <LinkOption to="/programs/little-solomons">Little Solomon Classes</LinkOption>
          <LinkOption to="/programs/rappelling">Rappelling</LinkOption>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProgramsDropdown;

interface LinkOptionProps {
  to: string;
  children: React.ReactNode;
}

const LinkOption: React.FC<LinkOptionProps> = ({ to, children }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={to}
          className={cx(
            active ? 'bg-emerald-100/20 text-emerald-700' : 'text-gray-700',
            'block px-4 py-2 text-sm first:pt-3 last:pb-3',
          )}
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
};
