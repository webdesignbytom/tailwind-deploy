import React from 'react';

function Goal({ goal }) {
  return (
    <>
      <div className=''>
        <h3 className='small__title__hover group-hover:text-white group-active:text-white'>
          {goal.title}
        </h3>
        <p className='secondary__container'>{goal.content}</p>
      </div>
      <div className='border-2 border-eco-green group-hover:border-2 group-hover:border-eco-green-dark rounded overflow-hidden m-2 box-content'>
        <img className='h-[280px]' src={goal.image} alt={goal.title} />
      </div>
    </>
  );
}

export default Goal;
