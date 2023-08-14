import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import cx from 'classnames';
import MainHeader from './MainHeader';
import Footer from './Footer';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Logo from './Logo';
import Button from './Button';

interface Props {
  children: React.ReactNode;
  page: string;
  imageViewer?: {
    images: string[];
    isOpen: boolean;
    setIsOpen(open: boolean): void;
    index: number;
    setIndex(index: number): void;
  };
}

const Chrome: React.FC<Props> = ({ children, page, imageViewer }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <MainHeader page={page} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-grow flex flex-col">{children}</div>
      <Footer />

      {/* mobile nav */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden block"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500"
              enterFrom="translate-x-full scale-75 opacity-0"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full scale-75 opacity-0"
            >
              <Dialog.Panel className="w-96">
                <div className="h-[calc(100vh-32px)] rounded-3xl overflow-y-scroll bg-white m-4 shadow-xl p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col bg-slate-50 px-4 py-6 rounded-3xl">
                      <SidebarLink to="/">Home</SidebarLink>
                      <SidebarLink to="/about">About</SidebarLink>
                      <SidebarLink to="/calendar">Calendar</SidebarLink>
                      <SidebarLink to="/blog">Blog</SidebarLink>
                      <SidebarLink to="/newsfeed">Newsfeed</SidebarLink>
                      <SidebarLink to="/gallery">Gallery</SidebarLink>
                      <SidebarLink to="/contact">Contact</SidebarLink>
                    </div>
                    <div className="flex flex-col bg-slate-50 px-4 py-6 rounded-3xl mt-4">
                      <SidebarLink to="/programs/river-schools">
                        River Schools
                      </SidebarLink>
                      <SidebarLink to="/programs/river-rangers">
                        River Rangers
                      </SidebarLink>
                      <SidebarLink to="/programs/pollywogs">Pollywogs</SidebarLink>
                      <SidebarLink to="/programs/little-solomons">
                        Little Solomon Classes
                      </SidebarLink>
                      <SidebarLink to="/programs/rappelling">Rappelling</SidebarLink>
                    </div>
                  </div>
                  <Button
                    type="link"
                    to={process.env.NEXT_PUBLIC_PAYPAL_DONATION_URL || ``}
                    color="primary"
                    size="sm"
                    icon="paypal"
                    className="mt-4"
                    openInNewTab
                  >
                    Donate
                  </Button>
                  <Logo className="self-center mb-6 mt-8" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* image viewer */}
      {imageViewer && (
        <Transition.Root show={imageViewer.isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => null}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
                onClick={() => imageViewer.setIsOpen(false)}
              />
            </Transition.Child>

            <div className="pointer-events-none fixed w-screen h-screen top-0 left-0 flex justify-center items-center">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-y-40 scale-90 opacity-0"
                enterTo="translate-y-0 scale-100 opacity-100"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-y-0 scale-100 opacity-100"
                leaveTo="-translate-y-40 scale-90 opacity-0"
              >
                <Dialog.Panel className="pointer-events-auto">
                  <div className="mx-4 w-80 2xs:w-96 xs:w-112 sm:w-128 md:w-176 xl:w-[1200px] rounded-3xl overflow-y-scroll bg-white overflow-hidden shadow-xl pointer-events-auto flex flex-col items-center">
                    <div className="p-2 bg-emerald-500 self-stretch flex justify-end">
                      <button
                        className="bg-white w-8 h-8 flex justify-center items-center rounded-full hover:bg-emerald-100 transition duration-100"
                        onClick={() => imageViewer.setIsOpen(false)}
                      >
                        <XMarkIcon className="h-5 text-emerald-500" />
                      </button>
                    </div>
                    <div className="w-full h-96 sm:h-[600px] flex justify-center items-center p-4 sm:p-8 flex-grow shrink-0 relative">
                      {imageViewer.images.map((image, i) => (
                        <div
                          key={image}
                          className={cx(
                            'h-[calc(100%-32px)] sm:h-[calc(100%-64px)] w-full flex justify-center absolute [transition:300ms]',
                            i < imageViewer.index && '-left-[100%] opacity-0',
                            i === imageViewer.index && 'left-0 opacity-100',
                            i > imageViewer.index && 'left-[100%] opacity-0',
                          )}
                        >
                          <Image
                            src={imageViewer.images[i]}
                            width={1000}
                            height={1000}
                            alt="Canoe Creation image"
                            className="rounded-3xl shadow-md h-full w-auto object-cover max-w-[calc(100%-32px)] sm:max-w-[calc(100%-64px)]"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-3 sm:gap-4 bg-slate-100 p-4 sm:p-8 self-stretch">
                      <button
                        className="w-12 self-stretch sm:self-center min-h-[48px] sm:h-12 hover:bg-slate-200 flex justify-center items-center rounded-full transition duration-200 active:scale-90 active:bg-slate-300 shrink-0"
                        onClick={() =>
                          imageViewer.setIndex(
                            imageViewer.index === 0
                              ? imageViewer.images.length - 1
                              : imageViewer.index - 1,
                          )
                        }
                      >
                        <ChevronLeftIcon className="h-6 text-slate-500" />
                      </button>
                      <ImagePreviews
                        images={imageViewer.images}
                        imageIndex={imageViewer.index}
                        setImageIndex={imageViewer.setIndex}
                      />
                      <button
                        className="w-12 self-stretch sm:self-center min-h-[48px] sm:h-12 hover:bg-slate-200 flex justify-center items-center rounded-full transition duration-200 active:scale-90 active:bg-slate-300 shrink-0"
                        onClick={() =>
                          imageViewer.setIndex(
                            imageViewer.index === imageViewer.images.length - 1
                              ? 0
                              : imageViewer.index + 1,
                          )
                        }
                      >
                        <ChevronRightIcon className="h-6 text-slate-500" />
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </div>
  );
};

export default Chrome;

interface SidebarLinkProps {
  to: string;
  children: React.ReactNode;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, children }) => {
  return (
    <Link
      href={to}
      className="rounded-full px-6 py-3 font-medium text-lg transition duration-150 hover:bg-slate-100 active:bg-slate-200 text-slate-600 hover:text-slate-900"
    >
      {children}
    </Link>
  );
};

interface ImagePreviewsProps {
  images: string[];
  imageIndex: number;
  setImageIndex(index: number): void;
}

const ImagePreviews: React.FC<ImagePreviewsProps> = ({
  images,
  imageIndex,
  setImageIndex,
}) => {
  return (
    <div className="flex justify-center items-center gap-3 sm:gap-4 flex-wrap">
      {images.map((image, index) => (
        <>
          <div
            className={cx(
              `block xl:hidden w-3 h-3 bg-slate-300 rounded-full transition duration-200 cursor-pointer hover:scale-110 active:scale-90`,
              index === imageIndex && ` bg-slate-400`,
            )}
            onClick={() => setImageIndex(index)}
            key={image + `_small`}
          />
          <Image
            className={cx(
              'rounded-xl shadow w-12 h-12 bg-cover bg-center cursor-pointer hover:scale-105 transition duration-100 hidden xl:block active:scale-100',
              index === imageIndex && 'ring-2 ring-emerald-500 ring-offset-2',
            )}
            onClick={() => setImageIndex(index)}
            key={image}
            src={image}
            alt={`Canoe Creation image`}
            width={48}
            height={48}
          />
        </>
      ))}
    </div>
  );
};
