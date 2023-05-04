import React from 'react';

function FundingItem() {
  return (
    <div
      className='bg-white block rounded-lg shadow-lg mb-6 lg:mb-0'
      data-mdb-ripple='true'
      data-mdb-ripple-color='light'
    >
      <div className='relative overflow-hidden bg-no-repeat bg-cover'>
        <img
          src='https://mdbootstrap.com/img/new/standard/nature/111.jpg'
          className='w-full rounded-t-lg'
          alt='thing'
        />
        <a href='#!'>
          <div
            className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
            style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
          ></div>
        </a>
        <svg
          className='absolute'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          style={{ left: '0', bottom: '0' }}
        >
          <path
            fill='#fff'
            d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div className='p-6'>
        <h5 className='font-bold text-lg mb-3'>Nostalgic waves</h5>
        <p className='mb-4 pb-2'>
          Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
          vulputate. Ut vulputate est non quam dignissim elementum. Donec a
          ullamcorper diam.
        </p>
        <a
          href='#!'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
          className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default FundingItem;
