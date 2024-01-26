import React, { useContext } from 'react';
// Context
import { BioClickerGameContext } from '../../../../context/BioClickerGameContext';

function BioClickerLevelData() {
  const { currentLevel } = useContext(BioClickerGameContext);

  return (
    <section className='hidden lg:grid grid-cols-reg gap-4 absolute left-2 2xl:left-3 top-[72px] z-30 bg-transparent-black w-fit h-fit outline outline-2 2xl:outline-4 outline-black py-1 2xl:py-2 pl-1 2xl:pl-4 pr-4 2xl:pr-8 rounded-br-2xl rounded-tr-2xl'>
      <div className='grid items-center justify-center w-full'>
        <p className='text-xl'>🔥</p>
      </div>

      <div className='text-gray-100 text-xs font-semibold'>
        <div className=''>
          <span>Level Name</span>
          <h6>
            {currentLevel.name} {currentLevel.id}
          </h6>
        </div>
        <div className=''>
          <span>Target Score</span>
          <h6>{currentLevel.targetScore}</h6>
        </div>
      </div>
    </section>
  );
}

export default BioClickerLevelData;
