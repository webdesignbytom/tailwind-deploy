import React from 'react';

function TimelineCard({ isOdd, item }) {
  if (isOdd) {
    return (
      <article className='grid w-full h-fit '>
        <div className='grid w-1/2 px-2 py-2 mx-auto'>
          <div className='outline outline-1 outline-black rounded-lg p-1 w-1/2'>
            <div className='grid bg-yellow-200 w-full rounded-lg px-4 py-2 '>
              <div className='font-semibold'>{item.title}</div>
              <div className='leading-5'>{item.description}</div>
            </div>
          </div>
        </div>
      </article>
    );
  }
  if (!isOdd) {
    return (
      <article className='grid w-full h-fit '>
        <div className='grid w-1/2 px-2 py-2 mx-auto justify-items-end'>
          <div className='outline outline-1 outline-black rounded-lg p-1 w-1/2'>
            <div className='grid bg-yellow-200 w-full rounded-lg px-4 py-2 '>
              <div className='font-semibold'>{item.title}</div>
              <div className='leading-5'>{item.description}</div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default TimelineCard;
