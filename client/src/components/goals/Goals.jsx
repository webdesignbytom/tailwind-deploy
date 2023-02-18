import React from 'react';
import { GoalsList } from '../../utils/GoalsList';
import Goal from './Goal';

function Goals() {
  return (
    <>
      <section id='goals' className='section__container'>
        <section className='flex flex-col justify-between w-full'>
          <article className='pb-4'>
            <h4 className='small__title'>What will be do?</h4>
            <h2 className='section__title'>Goals</h2>
          </article>
          <section className=''>
            <article className='mb-2'>
              <p className='text__container'>
                We have three main goals we hope to achieve. Again everything we
                are doing, is to try and help the environment and people in need
                of help with rising fuel costs.
              </p>
            </article>
          </section>

          <section className='grid lg:grid-cols-3 gap-4'>
            {GoalsList.map((goal, index) => {
              return (
                <article className='border-2 border-eco-green rounded-lg'>
                  <Goal goal={goal} key={index} />
                </article>
              );
            })}
          </section>
        </section>
      </section>
    </>
  );
}

export default Goals;
