import React from 'react';

function TimelineCard({ isOdd, item }) {
  return (
    <article className={`card ${isOdd ? 'odd' : 'even'} `}>
      <div className='info grid relative'>
        <div className='title'>{item.title}</div>
        <div className=''>{item.description}</div>
        <div
          className={`absolute z-10 ${
            isOdd ? 'left-[98%] top-1' : 'right-[98%] top-1'
          } `}
        >
          <div className='w-[100px] bg-red-500 h-[100px] outline outline-black outline-1 rounded-full grid'>
            <div className='grid items-center justify-center '>
              <span>{item.cost}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default TimelineCard;
