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
                We have three main goals we hope to achieve. Again everything we
                are doing, is to try and help the environment and people in need
                of help with rising fuel costs. We have three main goals we hope
                to achieve. Again everything we are doing, is to try and help
                the environment and people in need of help with rising fuel
                costs.
              </p>
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
