import React, { useState } from 'react';
// Data
import { availableAppsAndServices } from '../../data/AvailableAppsArray';
import AppDisplayItem from './AppDisplayItem';

function AppsPageMainComponent() {
  const [appsAndWeb, setAppsAndWeb] = useState(availableAppsAndServices);

  return (
    <main className='grid'>
      <div className='grid grid-rows-reg mb-10 mt-6'>
        {/* Header */}
        <header className='grid grid-cols-2 px-10 h-fit'>
          <article className='container px-10 py-10 mx-auto'>
            <div className=''>
              <h1 className='text-2xl lg:text-3xl font-semibold text-gray-800  dark:text-white'>
                <span className='font-bold text-3xl lg:text-4xl'>
                  Apps and Web
                </span>{' '}
                <br /> products by{' '}
                <span className='text-main-colour font-bold'>myecoapp</span>
              </h1>
            </div>

            <div className='mt-2'>
              <span className='inline-block w-40 h-1 bg-main-colour rounded-full'></span>
              <span className='inline-block w-3 h-1 ml-1 bg-main-colour rounded-full'></span>
              <span className='inline-block w-1 h-1 ml-1 bg-main-colour rounded-full'></span>
            </div>
          </article>

          <article className=' grid items-center justify-items-end'>
            <div className='w-2/3 grid  justify-end'>
              <h2>
                By creating free to you services with apps and websites, that
                you can use daily and earn us money each time you do. By
                advertising no more than anyone else.
              </h2>
            </div>
          </article>
        </header>

        <section className='grid px-4 py-4 ml-2'>
          <div className='grid grid-rows-reg px-4'>
            <article className='mb-4'>
              <div>
                <h2>
                  <span className='text-xl'>Available Apps and Web</span>
                </h2>
              </div>
            </article>

            <div className='grid grid-cols-2 gap-x-6 gap-y-4 h-full w-full'>
              {appsAndWeb.map((app, index) => {
                return <AppDisplayItem key={index} app={app} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AppsPageMainComponent;
