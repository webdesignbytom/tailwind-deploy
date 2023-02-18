import React from 'react';

function Goal({ goal }) {
  return (
    <>
      <div className=''>
        <h3 className='small__title__hover group-hover:text-eco-green group-active:text-eco-green'>
          {goal.title}
        </h3>
        <p className='secondary__container'>{goal.content}</p>
      </div>
      <div className='border-2 group-hover:border-2 border-white group-hover:border-eco-green-dark rounded-md overflow-hidden m-2 box-content md:object-cover h-min'>
        <img className='w-full h-[250px]' src={goal.image} alt={goal.title} />
      </div>
    </>
  );
}

export default Goal;
