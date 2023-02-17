import React from 'react';
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <div className='grid grid-flow-col space-x-0 w-full gap-4'>
      <Link className='main__button'>
        See More
      </Link>
      <Link className='accent__button'>
        Projects
      </Link>
      <Link className='accent__button'>
        Goals
      </Link>
    </div>
  );
}

export default CTA;
