import React from 'react';

function BioClickerPointsDataContainer() {
  return (
    <section className='grid h-[60px] bg-[#00000060] w-full absolute top-0'>
      <div className='grid grid-cols-3 gap-2 items-center px-2'>
        <div className='grid outline outline-1 outline-black rouned-xl py-1 px-1 items-center justify-center'>PPS</div>
        <div className='grid outline outline-1 outline-black rouned-xl py-1 px-1 items-center justify-center'>SCORE</div>
        <div className='grid outline outline-1 outline-black rouned-xl py-1 px-1 items-center justify-center'>PPC</div>
      </div>
    </section>
  );
}

export default BioClickerPointsDataContainer;
