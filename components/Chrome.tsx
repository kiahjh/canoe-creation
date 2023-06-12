import React from 'react';
import MainHeader from './MainHeader';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
  page: string;
}

const Chrome: React.FC<Props> = ({ children, page }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader page={page} />
      <div className="flex-grow flex flex-col">{children}</div>
      <Footer />
    </div>
  );
};

export default Chrome;
