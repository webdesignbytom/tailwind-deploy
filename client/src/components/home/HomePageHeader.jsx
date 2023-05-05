import React from 'react';
// Components
import HeaderCTA from './HeaderCTA';
import NewsletterCTA from '../newsletter/NewsletterCTA';
// Icon
import { MdGamepad } from 'react-icons/md';
import { HiFilm, HiShoppingCart } from 'react-icons/hi';
import { FaTools, FaServer } from 'react-icons/fa';

function HomePageHeader() {
  return (
    <header id='hero' className='grid p-4 w-full'>
      <div className='grid md:grid-cols-2x h-full'>
        {/* Text Section Left */}
        <section className='grid h-full my-10'>
          <div className='mt-2 md:mt-4 md:pl-20'>
            <article className='h-fit px-2'>
              <div className='text-lg'>
                <h4 className='text-main-colour'>Brand new web project</h4>
              </div>
              <h1 className='text-main-colour font-extrabold text-6xl lg:text-8xl 2xl:text-9xl pb-6 text-center md:text-left'>
                myecoapp
              </h1>
              <h2 className='font-sans px-2 text-2xl 2xl:text-3xl font-bold tracking-tight text-gray-800 dark:text-slate-100 max-w-lg mb-4'>
                Help The Planet <br className='hidden md:block' />
                by existing,{' '}
                <span className='inline-block text-deep-purple-accent-400'>
                  visting and sharing!
                </span>
              </h2>
              <div className='md:max-w-[80%]'>
                <p className='text-text-grey leading-5 dark:text-slate-100 text-base md:text-lg font-poppins'>
                  Help the environment from anywhere for free! At home or at any
                  event. Use our apps to help us earn while you relax. We have
                  done what we can to provide entertainment for you. Check out
                  some more feaure with the links below.
                </p>
              </div>
            </article>
            <section className='grid md:max-w-[80%] mb-6 md:mb-0 mt-6'>
              <HeaderCTA />
            </section>
          </div>

          {/* icons */}
          <section className='grid md:-mt-10'>
            <div className='grid grid-cols-5 mdpx-10 md:ml-10 md:mr-20 h-fit md:max-w-[80%] '>
              <article className='grid items-center justify-center p-2'>
                <div className='grid justify-center mb-4'>
                  <MdGamepad className='text-main-colour ' size={90} />
                </div>
                <div>
                  <h4 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
                    GAMES
                  </h4>
                </div>
              </article>
              <article className='grid items-center justify-center p-2'>
                <div className='grid justify-center mb-4'>
                  <HiFilm className='text-main-colour' size={90} />
                </div>
                <div>
                  <h4 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
                    MEDIA
                  </h4>
                </div>
              </article>
              <article className='grid items-center justify-center p-2'>
                <div className='grid justify-center mb-4'>
                  <FaTools className='text-main-colour' size={90} />
                </div>
                <div>
                  <h4 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
                    SERVICES
                  </h4>
                </div>
              </article>
              <article className='grid items-center justify-center p-2'>
                <div className='grid justify-center mb-4'>
                  <FaServer className='text-main-colour' size={90} />
                </div>
                <div>
                  <h4 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
                    TECH
                  </h4>
                </div>
              </article>
              <article className='grid items-center justify-center p-2'>
                <div className='grid justify-center mb-4'>
                  <HiShoppingCart className='text-main-colour' size={90} />
                </div>
                <div>
                  <h4 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
                    SHOPPING
                  </h4>
                </div>
              </article>
            </div>
          </section>
        </section>

        {/* Phone images */}
        <section className='grid mt-10 md:mt-0 md:mr-10 md:-ml-10 p-6'>
          <div className='grid relative grid-flow-col'>
            <div className=' relative z-10 md:-ml-4 grid items-center'>
              <img
                className='object-cover'
                src='https://kitwind.io/assets/kometa/one-girl-phone.png'
                alt=''
              />
            </div>
            <div className='relative z-0 grid items-center'>
              <img
                className='object-cover '
                src='https://kitwind.io/assets/kometa/two-girls-phone.png'
                alt=''
              />
            </div>
          </div>
        </section>
      </div>
      <section className='lg:hidden'>
        <NewsletterCTA />
      </section>
    </header>
  );
}

export default HomePageHeader;
