import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => (
  <footer className="bg-slate-50 border-t border-slate-200 z-10">
    <div className="py-8 xs:py-12 px-6 xs:px-8 md:px-20 lg:px-32 flex sm:flex-row flex-col sm:items-start justify-between">
      <div className="flex sm:flex-col items-start justify-between">
        <Logo />
        <div className="flex-col sm:mt-8 text-slate-600 ml-4 gap-2 text-sm sm:text-base hidden xs:flex">
          <span className="font-medium">Al and Amy Parker</span>
          <span>6400 Cutler Lake Rd.</span>
          <span>Blue Rock, OH 43720</span>
          <a
            href="tel:740-674-4403"
            className="text-cyan-600 hover:text-cyan-700 font-medium"
          >
            (740) 674-4403
          </a>
          <Link
            href="https://facebook.com/canoecreationofficial"
            target="_blank"
            className="flex items-center gap-2 text-slate-600 font-medium mt-2 bg-slate-200 transition-colors duration-200 hover:bg-slate-300 w-fit rounded-xl px-4 py-2"
          >
            <i className="fa-brands fa-facebook sm:text-lg" />
            <span>Facebook page</span>
          </Link>
        </div>
      </div>
      <div className="flex space-x-16 justify-center mt-12 sm:mt-0">
        <div>
          <h3 className="font-bold text-slate-800 text-lg mb-2">Programs</h3>
          <ul className="flex flex-col space-y-1">
            <FooterLink to="/programs/river-schools">River Schools</FooterLink>
            <FooterLink to="/programs/river-rangers">River Rangers</FooterLink>
            <FooterLink to="/programs/pollywogs">Pollywogs</FooterLink>
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
            <FooterLink to="/gallery">Gallery</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/get-involved">Get Involved</FooterLink>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-center pb-4 text-sm font-light tracking-widest text-slate-500">
      <span>Copywrite © {new Date().getFullYear()} ~ Canoe Creation</span>
    </div>
  </footer>
);

export default Footer;

interface FooterLinkProps {
  children: React.ReactNode;
  to: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, to }) => (
  <li>
    <Link
      href={to}
      className="text-slate-600 hover:text-slate-900 transition duration-150 py-1"
    >
      {children}
    </Link>
  </li>
);
