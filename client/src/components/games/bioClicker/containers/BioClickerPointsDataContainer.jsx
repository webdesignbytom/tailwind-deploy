import React, { useContext } from 'react';
// Context
import { BioClickerGameContext } from '../../../../context/BioClickerGameContext';

function BioClickerPointsDataContainer() {
  const { bioClickerGamePlayer } = useContext(BioClickerGameContext);

  const newPPS =
    bioClickerGamePlayer.pointsPerSecond *
    bioClickerGamePlayer.basePointsPerSecond;

  return (
    <section className='grid h-[60px] bg-[#00000080] w-full absolute z-10 top-0 border-b-2 border-main-colour border-solid '>
      <div className='grid grid-cols-3 gap-2 items-center px-2'>
        <div className='grid outline outline-1 outline-black rouned-xl py-1 px-1'>
          <div className='bg-white w-full grid justify-center grid-flow-col gap-2'>
            <span>PPS</span> 
            <span>{Math.trunc(newPPS)}</span>
          </div>
        </div>
        <div className='grid outline outline-1 outline-black rouned-xl py-1 px-1'>
          <div className='bg-white w-full grid justify-center grid-flow-col gap-2'>
            <span>SCORE</span>{' '}
            <span>{Math.trunc(bioClickerGamePlayer.totalScore)}</span>
          </div>
        </div>
        <div className='grid outline outline-1 outline-black rouned-xl py-1 px-1'>
          <div className='bg-white w-full grid justify-center grid-flow-col gap-2'>
            <span>PPC</span>{' '}
            <span>{Math.trunc(bioClickerGamePlayer.pointsPerClick)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioClickerPointsDataContainer;
