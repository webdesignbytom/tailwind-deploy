import React, { useState } from 'react';
// Components
import TimelineCard from './TimelineCard';
// Data
import { TimelineDataArray } from '../../data/TimelineEventData';

function TimelinePageContent() {
  const [timelineDataArray, setTimelineDataArray] = useState(TimelineDataArray)

  return (
    <main className='grid'>
      <div className='grid grid-rows-reg mb-10 mt-6'>
        {/* Header */}
        <header className='grid grid-cols-2 px-10 h-fit'>
          <article className='container px-10 py-10 mx-auto'>
            <div className=''>
              <h1 className='text-2xl lg:text-3xl font-semibold text-gray-800  dark:text-white'>
                <span className='font-bold text-3xl lg:text-4xl'>Timeline</span>
                <br /> for
                <span className='text-main-colour font-bold'>goals</span>
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
                We dont have a conventianal timeline where we can say what we
                will be up to ever year. Ours is more funding based. We will
                explain and show each thing we can achieve with amounts of money
                earned. We want to show how as we grow we can start to provide
                more jobs and cheaper ways to achieve our goals.
              </h2>
            </div>
          </article>
        </header>

        {/* Timeline display */}
        <section className='grid px-4 py-4 ml-2 mt-10'>
          <div className='grid gap-y-0'>
            {timelineDataArray.map((item, index) => {
              return (
                <TimelineCard key={index} isOdd={index % 2 === 0} item={item} />
                )
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default TimelinePageContent;
