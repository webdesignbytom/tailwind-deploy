import React from 'react';

function Goal({ goal }) {
  return (
    <>
      <div>
        <h3 className='small__title'>{goal.title}</h3>
        <p className='text__container'>{goal.content}</p>
        <img src={goal.image} alt={goal.title} />
      </div>
    </>
  );
}

export default Goal;
