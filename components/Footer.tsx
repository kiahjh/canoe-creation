import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="py-8 xs:py-12 px-6 xs:px-8 md:px-20 lg:px-32 flex sm:flex-row flex-col sm:items-start justify-between">
        <Logo />
        <div className="flex space-x-16 justify-center mt-12 sm:mt-0">
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">Programs</h3>
            <ul className="flex flex-col space-y-1">
              <FooterLink to="/programs/river-rangers">River Rangers</FooterLink>
              <FooterLink to="/programs/pollywogs">Pollywogs</FooterLink>
              <FooterLink to="/programs/river-schools">River Schools</FooterLink>
              <FooterLink to="/programs/little-solomons">
                Little Solomon Classes
              </FooterLink>
              <FooterLink to="/programs/rappelling">Rappelling</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">Other</h3>
            <ul className="flex flex-col space-y-1">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/calendar">Calendar</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/newsfeed">Newsfeed</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-4 text-sm font-light tracking-widest text-slate-500">
        <span>Copywrite © {new Date().getFullYear()} ~ Canoe Creation</span>
      </div>
    </footer>
  );
};

export default Footer;

interface FooterLinkProps {
  children: React.ReactNode;
  to: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, to }) => {
  return (
    <li>
      <Link
        href={to}
        className="text-slate-600 hover:text-slate-900 transition duration-150 py-1"
      >
        {children}
      </Link>
    </li>
  );
};
