import React, { useContext } from 'react';
// Context
import { BioClickerGameContext } from '../../../../context/BioClickerGameContext';

function BioClickerPointsDataContainer() {
  const { bioClickerGamePlayer } = useContext(BioClickerGameContext);

  const newPPS =
    bioClickerGamePlayer.pointsPerSecond *
    bioClickerGamePlayer.basePointsPerSecond;

  return (
    <section className='grid h-[60px] bg-[#00000060] w-full absolute top-0'>
      <div className='grid grid-cols-3 gap-2 items-center px-2'>
        <div className='grid outline outline-1 outline-black rouned-xl py-1 px-1 items-center justify-center'>
          PPS <span>{Math.trunc(newPPS)}</span>
        </div>
        <div className='grid outline outline-1 outline-black rouned-xl py-1 px-1 items-center justify-center'>
          SCORE <span>{Math.trunc(bioClickerGamePlayer.totalScore)}</span>
        </div>
        <div className='grid outline outline-1 outline-black rouned-xl py-1 px-1 items-center justify-center'>
          PPC {Math.trunc(bioClickerGamePlayer.pointsPerClick)}
        </div>
      </div>
    </section>
  );
}

export default BioClickerPointsDataContainer;
