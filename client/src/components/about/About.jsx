import React, { useState } from 'react';
import { AboutSections } from '../../utils/AboutSections';
import AboutElement from './AboutElement';
import Banner from '../../assets/img/bannerImg.jpeg'

function About() {
  const [elementSelected, setElementSelected] = useState(AboutSections[0]);

  return (
    <>
      <section id='about' className='section__container'>
        <section className='flex flex-col justify-between w-full'>
          <article>
            <h4 className='small__title'>What's It All About?</h4>
            <h2 className='section__title'>About Us</h2>
          </article>
          <article className=''>
            <p className='text__container'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              asperiores, in aliquam cum repudiandae sequi, nobis atque ipsum
              explicabo tempora, aut quo consequatur perspiciatis est ullam
              accusantium! Provident vero obcaecati debitis nesciunt mollitia,
              modi ad reprehenderit magni unde excepturi aperiam velit molestias
              aliquam, corporis fugit ducimus repellendus, vitae harum
              accusamus!
            </p>
          </article>
        </section>

        <section>
          <img src={Banner} alt="Banner" />
        </section>

        {/* Phone container for folder options */}
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
    </>
  );
}

export default About;
