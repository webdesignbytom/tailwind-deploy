import React from 'react';

function AboutElement({ elementSelected }) {
  return (
    <>
      <div>
        <h3 className='small__title pl-2 pt-2 pb-0'>{elementSelected.title}</h3>
        <p className='text__container'>{elementSelected.content}</p>
      </div>
    </>
  );
}

export default AboutElement;
