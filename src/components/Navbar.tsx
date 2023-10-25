'use client';
import React from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
  ArrowDownCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Tech', href: '#technologies' },
  { name: 'Projects', href: '#projects' },
  { name: 'Github', href: 'https://github.com/vanyanv' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/vardanvanyan/' },
  {
    name: 'Resume',
    href: 'Resume/Vardan_Vanyan_Resume.pdf',
    pdf: 'Vardan_Vanyan_Resume.pdf',
  },
];

const resumeDownloadIcon = (item: {
  name: string;
  href: string;
  pdf?: string;
}) => {
  if (item.name === 'Resume') {
    return (
      <>
        <a
          key={item.name}
          href={item.href}
          download={item.pdf}
          className='flex gap-1 text-sm font-semibold leading-6 text-gray-900 hover:animate-bounce hover:text-indigo-500'
        >
          <ArrowDownCircleIcon className='-mr-0.5 h-6 w-6' aria-hidden='true' />
          {item.name}
        </a>
      </>
    );
  } else {
    return (
      <a
        key={item.name}
        href={item.href}
        download={item.pdf}
        className='text-sm font-semibold leading-6 text-gray-900 hover:animate-bounce  hover:text-indigo-500'
      >
        {item.name}
      </a>
    );
  }
};
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className='absolute inset-x-0 top-0 z-50 '>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Vardan Vanyan</span>
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => resumeDownloadIcon(item))}
          </div>

          <div className='hidden lg:flex lg:flex-1 lg:justify-end'></div>
        </nav>

        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Vardan</span>
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 '
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='py-6'></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
