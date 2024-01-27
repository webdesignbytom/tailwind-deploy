import React from 'react';
// Components
import HeaderCTA from './HeaderCTA';
import NewsletterCTA from '../newsletter/NewsletterCTA';
import BannerAdvert from '../adverts/BannerAdvert';
import FiveWayCta from './FiveWayCta';

function HomePageHeader() {
  return (
    <header id='hero' className='grid  w-full'>
      <div className='grid w-full py-8 pl-8 2xl:pl-10 pr-4 2xl:pr-10'>
        <div className='grid md:grid-cols-2x h-full'>
          {/* Text Section Left */}
          <section className='grid h-full'>
            <section className=''>
              <article className=''>
                {/* Titles */}
                <div className='grid text-lg 2xl:text-xl pl-6 2xl:pl-10 mt-4 2xl:mt-6'>
                  <div>
                    <h3 className='text-main-colour font-semibold'>
                      <span>Brand new web project</span>
                    </h3>
                  </div>
                  <div>
                    <h4>
                      <span>Proudly sponsored by Cat App</span>
                    </h4>
                  </div>
                </div>
                {/* Main title */}
                <div className='pl-2 pb-6 text-center md:text-left'>
                  <h1 className='text-main-colour font-extrabold text-6xl lg:text-8xl 2xl:text-9xl '>
                    <span>myecoapp</span>
                  </h1>
                </div>
                <div className='2xl:pt-4'>
                  <h2 className='font-sans px-2 text-2xl 2xl:text-3xl font-bold tracking-tight text-gray-800 dark:text-slate-100 max-w-lg mb-4 leading-5 2xl:leading-6'>
                    <span>Help The Planet</span>{' '}
                    <br className='hidden md:block' />
                    <span>by existing, </span>
                    <span className='inline-block text-deep-purple-accent-400'>
                      visting and sharing!
                    </span>
                  </h2>
                </div>
                <div className='md:max-w-[80%] 2xl:pt-6'>
                  <p className='text-text-grey leading-5 2xl:leading-6 h-fit dark:text-slate-100 font-poppins'>
                    Help the environment from anywhere for free! At home or at
                    any event. Use our apps to help us earn while you relax. We
                    have done what we can to provide entertainment for you.
                    Check out some more feaure with the links below.
                  </p>
                </div>
              </article>
              <section className='grid px-8 mt-8 2xl:mt-12'>
                <HeaderCTA />
              </section>
            </section>

            {/* cta icons */}
            <section className='grid justify-center mt-8 2xl:mt-20'>
              <FiveWayCta />
            </section>
          </section>

          {/* Image container */}
          <section className='grid justify-start items-start p-6 2xl:p-10 2xl:mt-8'>
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

            {/* Advertisement */}
            <section className='xl:mt-2 2xl:mt-8'>
              <BannerAdvert />
            </section>
          </section>
        </div>
      </div>
    </header>
  );
}

export default HomePageHeader;
