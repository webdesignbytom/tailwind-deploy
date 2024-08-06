import React from 'react';

function BannerAdvert() {
  return (
    <article className='h-[75px] grid items-center w-full bg-gray-50 outline outline-2 outline-main-colour rounded-lg overflow-hidden shadow-lg'>
      <div className='grid item-center text-center'>
        <div>
          <span>BUY REALLY BIG ROCKS</span>
        </div>
        <div className='grid grid-flow-col items-center justify-center'>
          <span>Jims big rock warehouse</span>
          <div className='pl-2'>
            <a href='/'>
              <span className='text-hyperlink'>Link</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BannerAdvert;
