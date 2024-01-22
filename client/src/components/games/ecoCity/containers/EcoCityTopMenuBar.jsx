import React, { useContext } from 'react';
// Context
import { EcoCityGameContext } from '../../../../context/EcoCityGameContext';

function EcoCityTopMenuBar() {
  const { ecoCityGamePlayer } = useContext(EcoCityGameContext);

  return (
    <section className='grid absolute z-20 h-[50px] w-full mt-4'>
      <div className='eco_city_nav_bg grid w-1/2 mx-auto border-solid border-2 border-amber-800 rounded-lg p-1'>
        {/* Player data */}
        <section className='grid grid-cols-3'>
          {/* Player */}
          <div className='grid grid-flow-col w-fit' title='Player name'>
            <span className='pr-1'>
              <strong>{ecoCityGamePlayer.title}</strong>
            </span>
            <span className='italic'>{ecoCityGamePlayer.playerName}</span>
          </div>
          {/* Town */}
          <div className='grid justify-center' title='City name'>
            <span className='font-semibold text-lg'>
              {ecoCityGamePlayer.cityData.cityName}
            </span>
          </div>
          {/* Something */}
          <div className='grid justify-items-end'>hi</div>
        </section>

        {/* Currency */}
        <section className='grid items-center mt-2'>
          <div className='grid grid-flow-col gap-1'>
            <div
              className='outline-1 outline outline-black rounded px-1 text-sm font-semibold cursor-pointer'
              title='Gold currency'
            >
              <span>🪙 {ecoCityGamePlayer.currencyData.gold}</span>
            </div>
            <div
              className='outline-1 outline outline-black rounded px-1 text-sm font-semibold cursor-pointer'
              title='Gem currency'
            >
              <span>💎 {ecoCityGamePlayer.currencyData.gems}</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default EcoCityTopMenuBar;
