import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import {
  ArrowRightCircleIcon,
  CalendarDaysIcon,
  Squares2X2Icon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

interface CommonProps {
  size?: 'sm' | 'md' | 'lg';
  color: 'primary' | 'secondary';
  icon?: 'arrow-circle-right' | 'video-camera' | 'calendar' | 'grid' | 'paypal';
  shadow?: boolean;
  className?: string;
  sizeOverride?: string;
  children: React.ReactNode;
}
interface LinkProps {
  type: 'link';
  to: string;
}
interface ButtonProps {
  type: 'button';
  onClick: () => void;
}
type Props = CommonProps & (LinkProps | ButtonProps);

const Button: React.FC<Props> = (props) => {
  const commonStyles =
    'flex justify-center items-center rounded-full font-medium transition duration-150';
  let colorStyles = (() => {
    switch (props.color) {
      case 'primary':
        return cx(
          'bg-emerald-500 text-white hover:bg-emerald-600',
          props.shadow && 'shadow-emerald-500/30',
        );
      case 'secondary':
        return cx(
          'bg-emerald-50 text-emerald-600 hover:bg-emerald-100',
          props.shadow && 'shadow-black/5',
        );
    }
  })();
  let sizeStyles = (() => {
    switch (props.size) {
      case 'sm':
        return cx(
          props.sizeOverride || 'px-4 py-1.5 text-base',
          props.shadow && 'shadow',
        );
      case 'md':
        return cx(
          props.sizeOverride || 'px-6 py-3 text-base',
          props.shadow && 'shadow-md',
        );
      case 'lg':
        return cx(props.sizeOverride || 'px-8 py-4 text-lg', props.shadow && 'shadow-lg');
    }
  })();
  const Icon = (() => {
    const iconStyles = cx(
      'mr-2',
      props.size === 'sm' ? 'h-5' : 'h-6',
      props.size === 'lg' && 'mr-3',
    );
    switch (props.icon) {
      case 'arrow-circle-right':
        return <ArrowRightCircleIcon className={iconStyles} />;
      case 'video-camera':
        return <VideoCameraIcon className={iconStyles} />;
      case 'calendar':
        return <CalendarDaysIcon className={iconStyles} />;
      case 'grid':
        return <Squares2X2Icon className={iconStyles} />;
      default:
        return <ArrowRightCircleIcon className={iconStyles} />;
    }
  })();

  if (props.type === 'button') {
    return (
      <button
        onClick={props.onClick}
        className={cx(commonStyles, colorStyles, sizeStyles, props.className)}
      >
        {props.icon && Icon}
        {props.children}
      </button>
    );
  }
  return (
    <Link
      href={props.to}
      className={cx(commonStyles, colorStyles, sizeStyles, props.className)}
    >
      {props.icon && Icon}
      {props.children}
    </Link>
  );
};

export default Button;
