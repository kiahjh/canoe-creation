import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="bg-slate-200 p-12 flex flex-col items-center justify-center gap-6">
      footer
    </footer>
  );
};

export default Footer;
