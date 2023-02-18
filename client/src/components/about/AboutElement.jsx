import React from 'react';

function AboutElement({ elementSelected }) {
  return (
    <>
      <div>
        <h3 className='small__title'>{elementSelected.title}</h3>
        <p className='secondary__container'>{elementSelected.content}</p>
      </div>
    </>
  );
}

export default AboutElement;
