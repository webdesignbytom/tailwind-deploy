import React from 'react';

function Goal({ goal }) {
  return (
    <>
      <div className=''>
        <h3 className='small__title'>{goal.title}</h3>
        <p className='text__container'>{goal.content}</p>
        <div>
          <img className='object-fill' src={goal.image} alt={goal.title} />
        </div>
      </div>
    </>
  );
}

export default Goal;
