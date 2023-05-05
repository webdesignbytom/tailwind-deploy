import React from 'react';
import { Link } from 'react-router-dom';

function HeaderCTA() {
  return (
    <div className='grid grid-flow-col gap-6 h-fit'>
      <Link
        to='/our-goals'
        className='p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] outline-2 no__highlights outline-colour-dark outline rounded text-center flex items-center justify-center bg-main-colour hover:bg-colour-dark hover:text-gray-100 active:scale-110 duration-200 ease-in-out lg:text-base 2xl:text-xl font-semibold text-gray-100'
      >
        <article>
          <h3>GOALS</h3>
        </article>
      </Link>
      <Link
        to='/funding'
        className='p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] outline-2 no__highlights outline-main-colour outline rounded text-center flex items-center justify-center bg-gray-100 hover:bg-colour-dark hover:text-gray-100 active:scale-110 duration-200 ease-in-out lg:text-base 2xl:text-xl font-semibold text-main-colour'
      >
        <article>
          <h3>FUNDING</h3>
        </article>
      </Link>
      <Link
        to='/about-us'
        className='p-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] outline-2 no__highlights outline-main-colour outline rounded text-center flex items-center justify-center bg-gray-100 hover:bg-colour-dark hover:text-gray-100 active:scale-110 duration-200 ease-in-out lg:text-base 2xl:text-xl font-semibold text-main-colour'
      >
        <article>
          <h3>ABOUT</h3>
        </article>
      </Link>
    </div>
  );
}

export default HeaderCTA;
