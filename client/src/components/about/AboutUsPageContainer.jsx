import React from 'react';
// Components
import NewsletterCTA from '../newsletter/NewsletterCTA';
// Data
import { aboustUsDataArray } from '../../data/CompanyData';
// Images
import MyeaLogo from '../../assets/images/myea/myea-logo.jpg';


function AboutUsPageContainer() {
  return (
    <main className='grid'>
      <section className='bg-white dark:bg-gray-900'>
        <article className='container px-6 py-10 mx-auto'>
          <h1 className='text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white'>
            About the team <br /> at{' '}
            <span className='text-main-colour font-semibold'>myecoapp</span>
          </h1>

          <div className='mt-2'>
            <span className='inline-block w-40 h-1 bg-main-colour rounded-full'></span>
            <span className='inline-block w-3 h-1 ml-1 bg-main-colour rounded-full'></span>
            <span className='inline-block w-1 h-1 ml-1 bg-main-colour rounded-full'></span>
          </div>

          <div className='mt-8 xl:mt-6 lg:flex lg:items-center'>
            <section className='grid w-full grid-cols-1 gap-8 lg:w-[75%] xl:gap-4 md:grid-cols-2'>
              <div className='space-y-3'>
                <span className='inline-block p-3 text-main-colour bg-green-100 rounded-xl dark:text-white dark:bg-main-colour'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                </span>

                <h1 className='text-xl font-semibold text-gray-700 capitalize dark:text-white'>
                  {aboustUsDataArray[0].title}
                </h1>

                <p className='text-gray-500 dark:text-gray-300'>
                  {aboustUsDataArray[0].content}
                </p>
              </div>

              <div className='space-y-3'>
                <span className='inline-block p-3 text-main-colour bg-green-100 rounded-xl dark:text-white dark:bg-main-colour'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                    />
                  </svg>
                </span>

                <h1 className='text-xl font-semibold text-gray-700 capitalize dark:text-white'>
                  {aboustUsDataArray[1].title}
                </h1>

                <p className='text-gray-500 dark:text-gray-300'>
                  {aboustUsDataArray[1].content}
                </p>
              </div>

              <div className='space-y-3'>
                <span className='inline-block p-3 text-main-colour bg-green-100 rounded-xl dark:text-white dark:bg-main-colour'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                    />
                  </svg>
                </span>

                <h1 className='text-xl font-semibold text-gray-700 capitalize dark:text-white'>
                  {aboustUsDataArray[2].title}
                </h1>

                <p className='text-gray-500 dark:text-gray-300'>
                  {aboustUsDataArray[2].content}
                </p>
              </div>

              <div className='space-y-3'>
                <span className='inline-block p-3 text-main-colour bg-green-100 rounded-xl dark:text-white dark:bg-main-colour'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                    />
                  </svg>
                </span>

                <h1 className='text-xl font-semibold text-gray-700 capitalize dark:text-white'>
                  {aboustUsDataArray[3].title}
                </h1>

                <p className='text-gray-500 dark:text-gray-300'>
                  {aboustUsDataArray[3].content}
                </p>
              </div>
            </section>

            <div className='hidden relative lg:flex lg:w-1/2 lg:justify-center'>
              <section className=''>
                <img
                  className='w-[28rem] h-[28rem] flex-shrink-0 object-cover shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] xl:w-[24rem] xl:h-[24rem] rounded-full'
                  src='https://github.com/webdesignsbytom/myecoapp-deploy/blob/main/client/src/assets/images/myea/myea-tshirt.jpg?raw=true'
                  alt='my eco app tshirt'
                />
                <img
                  className='w-[8rem] h-[8rem] absolute top-0 right-0 flex-shrink-0 object-cover shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] xl:w-[12rem] xl:h-[12rem] rounded-full'
                  src={MyeaLogo}
                  alt='my eco app logo'
                />
              </section>
            </div>
          </div>
        </article>
      </section>

      <section className='lg:hidden'>
        <NewsletterCTA />
      </section>
    </main>
  );
}

export default AboutUsPageContainer;
