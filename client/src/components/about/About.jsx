import React, { useState } from 'react';
import { AboutSections } from '../../utils/AboutSections';
import AboutElement from './AboutElement';

function About() {
  console.log('about', AboutSections);
  const [elementSelected, setElementSelected] = useState(AboutSections[0]);
  console.log('elementSelected', elementSelected);

  return (
    <>
      <section
        id='about'
        className='dark:bg-black px-4 py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'
      >
        <div>
          <h2 className='text-eco-green'>About</h2>
        </div>

        {/* Phone container for folder options */}
        <section className='grid'>
          <div className='grid grid-cols-3 p-1 gap-1 border-2 border-eco-green rounded-md'>
            <button
              className='control__button active:'
              onClick={() => {
                setElementSelected(AboutSections[0]);
              }}
            >
              People
            </button>
            <button
              className='control__button'
              onClick={() => {
                setElementSelected(AboutSections[1]);
              }}
            >
              Earnings
            </button>
            <button
              className='control__button'
              onClick={() => {
                setElementSelected(AboutSections[2]);
              }}
            >
              Projects
            </button>

            {/* Articles  */}
            <article>
              <AboutElement elementSelected={elementSelected} />
            </article>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
