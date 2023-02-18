import React, { useState } from 'react';
import { AboutSections } from '../../utils/AboutSections';
import AboutElement from './AboutElement';
import Banner from '../../assets/img/bannerImg.jpeg';

function About() {
  const [elementSelected, setElementSelected] = useState(AboutSections[0]);

  return (
    <>
      <section id='about' className='section__container'>
        <section className='flex flex-col justify-between w-full'>
          <article className='pb-4'>
            <h4 className='small__title'>What's It All About?</h4>
            <h2 className='section__title'>About Us</h2>
          </article>
          <section className='lg:grid lg:grid-cols-2-1 lg:gap-4'>
            <article className='mb-2'>
              <p className='text__container'>
                We have a simple philosphy and a simple goal. We want to help the environment and the people living in it. In England fuel costs are outrageous and most people couldnt afford to upgrade to solar or renewable energies even if they wanted to. Many people also feel like they are under attack from environmental groups and it causes anger at the environment. To help the people and the environment at the same time. We aim to use online earnings from free events our users and followers can take part in. It's a new age, and we dont need to solicate donation. We can use computers to create value. Mainly from advertsing companies. Which we pass on to causes to help the planet.
              </p>
            </article>

            <img
              className='w-full border-8 border-eco-green-dark rounded shadow-md'
              src={Banner}
              alt='Banner'
            />
          </section>
        </section>

        {/* Phone container for folder options */}
        <section className='lg:hidden'>
          <div className='text-center mt-2 mb-6'>
            <h3 className='secondary__title'>Our Ideas</h3>
          </div>
          <section className='grid border-2 border-eco-green rounded-md'>
            <div className='grid grid-cols-3 p-1 gap-1 '>
              <button
                className='control__button'
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
            </div>

            {/* Articles  */}
            <article>
              <AboutElement elementSelected={elementSelected} />
            </article>
          </section>
        </section>

        {/* Monitor version */}
        <section className='hidden lg:grid'>
          <div className='text-center mt-2 mb-6'>
            <h3 className='secondary__title'>Our Ideas</h3>
          </div>

          <section className='grid border-2 border-eco-green bg-eco-green-dark rounded-md'>
            <article className='grid grid-cols-3 p-1 gap-1 '>
              {/* Articles  */}
              {AboutSections.map((selected, index) => {
                return (
                  <div className='border-2 border-eco-green bg-white dark:bg-black rounded-md'>
                    <AboutElement key={index} elementSelected={selected} />
                  </div>
                );
              })}
            </article>
          </section>
        </section>
      </section>
    </>
  );
}

export default About;
