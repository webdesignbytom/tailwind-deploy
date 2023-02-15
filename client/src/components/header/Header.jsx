import React from 'react';
import CTA from './CTA';

function Header() {
  return (
    <>
      <section
        id='hero'
        className='px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'
      >
        <div className='flex flex-col items-center justify-between w-full mb-10 lg:flex-row'>
          <div className='mb-16 lg:mb-0 lg:max-w-lg lg:pr-5 lg:pl-5'>
            <article className='max-w-xl mb-6'>
              <div>
                <h4 className='inline-block font-semibold tracking-wider uppercase text-eco-green rounded-full'>
                  Brand new web project
                </h4>
              </div>
              <h1 className='text-eco-green font-extrabold text-6xl pb-6 md:py-4 text-center md:text-left'>
                myecoapp
              </h1>
              <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6'>
                Help The Planet <br className='hidden md:block' />
                by existing{' '}
                <span className='inline-block text-deep-purple-accent-400'>
                  and clicking
                </span>
              </h2>
              <p className='text-gray-700 text-base md:text-lg'>
                Help the environment from anywhere for free! At home or at any
                event. Use our apps to earn while you relax. We have done what
                we can to provide entertainment for you. Check it out below.
              </p>
            </article>
            <div className='flex items-center space-x-3'>
              <CTA />
            </div>
          </div>
          {/* Phones */}
          <div className='flex h-full items-center justify-center lg:w-1/2'>
            <div className='w-2/5'>
              <img
                className='object-cover'
                src='https://kitwind.io/assets/kometa/one-girl-phone.png'
                alt=''
              />
            </div>
            <div className='w-5/12 -ml-16 lg:-ml-32'>
              <img
                className='object-cover'
                src='https://kitwind.io/assets/kometa/two-girls-phone.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
