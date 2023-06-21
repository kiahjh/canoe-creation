import React, { useState } from 'react';
import cx from 'classnames';
import MainHeader from './MainHeader';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
  page: string;
}

const Chrome: React.FC<Props> = ({ children, page }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <MainHeader page={page} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-grow flex flex-col">{children}</div>
      <Footer />
      <div
        className={cx(
          'absolute left-0 top-0 w-screen h-screen bg-white/80 z-30',
          sidebarOpen ? `block` : `hidden`,
        )}
        onClick={() => setSidebarOpen(false)}
      />
      <nav
        className={cx(
          'bg-white w-80 h-screen absolute top-0 shadow-2xl z-40 [transition:300ms]',
          sidebarOpen ? `right-0` : `-right-80`,
        )}
      />
    </div>
  );
};

export default Chrome;
