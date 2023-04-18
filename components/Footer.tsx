import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="p-12 flex flex-col items-center justify-center gap-6">
      <Button
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="primary"
        size="lg"
      >
        Click me
      </Button>
      <Button
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="primary"
        size="md"
      >
        Click me
      </Button>
      <Button
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="primary"
        size="sm"
      >
        Click me
      </Button>
      <Button
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="secondary"
        size="lg"
      >
        Click me
      </Button>
      <Button
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="secondary"
        size="md"
      >
        Click me
      </Button>
      <Button
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="secondary"
        size="sm"
      >
        Click me
      </Button>
      <Button type="button" onClick={() => {}} color="primary" size="lg">
        Click me
      </Button>
      <Button type="button" onClick={() => {}} color="primary" size="md">
        Click me
      </Button>
      <Button type="button" onClick={() => {}} color="primary" size="sm">
        Click me
      </Button>
      <Button type="button" onClick={() => {}} color="secondary" size="lg">
        Click me
      </Button>
      <Button type="button" onClick={() => {}} color="secondary" size="md">
        Click me
      </Button>
      <Button type="button" onClick={() => {}} color="secondary" size="sm">
        Click me
      </Button>

      <Button
        shadow
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="primary"
        size="lg"
      >
        Click me
      </Button>
      <Button
        shadow
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="primary"
        size="md"
      >
        Click me
      </Button>
      <Button
        shadow
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="primary"
        size="sm"
      >
        Click me
      </Button>
      <Button
        shadow
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="secondary"
        size="lg"
      >
        Click me
      </Button>
      <Button
        shadow
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="secondary"
        size="md"
      >
        Click me
      </Button>
      <Button
        shadow
        type="button"
        icon={'arrow-circle-right'}
        onClick={() => {}}
        color="secondary"
        size="sm"
      >
        Click me
      </Button>
      <Button shadow type="button" onClick={() => {}} color="primary" size="lg">
        Click me
      </Button>
      <Button shadow type="button" onClick={() => {}} color="primary" size="md">
        Click me
      </Button>
      <Button shadow type="button" onClick={() => {}} color="primary" size="sm">
        Click me
      </Button>
      <Button shadow type="button" onClick={() => {}} color="secondary" size="lg">
        Click me
      </Button>
      <Button shadow type="button" onClick={() => {}} color="secondary" size="md">
        Click me
      </Button>
      <Button shadow type="button" onClick={() => {}} color="secondary" size="sm">
        Click me
      </Button>
    </footer>
  );
};

export default Footer;
