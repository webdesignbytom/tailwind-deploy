import React from 'react';
// Data
import { FundingOptions } from '../../utils/FundingOptions';

function Funding() {
  return (
    <>
      <section id='funding' className='section__container'>
        <section className='flex flex-col justify-between w-full'>
          <article className='pb-4'>
            <h4 className='small__title'>How do we pay for it?</h4>
            <h2 className='section__title'>Funding</h2>
          </article>
          <section className=''>
            <article className='mb-2'>
              <p className='text__container mx-6'>
                <span className='font-extrabold'>A new method for a new goal.</span> Gone are the days where we need to employ people to shake a charity tin in the street. To raise funds we want to try a new method. Not soliciting donations from the community but asking for their attention and time when online. Now we can earn money from a stream of online data and advertising methods without you having to give us anything. Everytime you log on to a device we can translate that into a small payment, getting more people behind us as we grow.
              </p>
              <p className='text__container mx-6'>Below we have laid out just a few methods of how we can work together to benifit the planet. Not only do you not have to donate any money. We save money by having an online presence unlike other charities paying huge amounts for buildings, staff and travel.</p>
            </article>
          </section>
        </section>
        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {FundingOptions.map((option, index) => {
            return (
              <article key={index} className='border-2 border-eco-green-dark rounded-md p-2'>
                <h2>{option.title}</h2>
                <img src={option.image} alt={option.title} />
                <p className='secondary__container'>{option.content}</p>
              </article>
            );
          })}
        </section>
      </section>
    </>
  );
}

export default Funding;
