import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const Logo: React.FC<Props> = ({ className, style }) => {
  return (
    <Link href="/" className={cx('flex items-center', className)} style={style}>
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
  );
};

export default Logo;
