import React from 'react';

function AboutElement({ elementSelected }) {
  return (
    <>
      <div>AboutElement
        <h3>{elementSelected.content}</h3>
      </div>
    </>
  );
}

export default AboutElement;
