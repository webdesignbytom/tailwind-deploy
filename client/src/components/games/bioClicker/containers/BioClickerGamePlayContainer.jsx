import React, { useContext, useState } from 'react';
// Components
import GameAnimationsScreen from '../animations/GameAnimationsScreen';
import BioClickerScrollingNewBar from '../animations/BioClickerScrollingNewBar';
import AlgaeClicker from '../animations/AlgaeClicker';
import BioClickerPointsDataContainer from './BioClickerPointsDataContainer';
import TownDisplay from '../animations/TownDisplay';
// Context
import { BioClickerGameContext } from '../../../../context/BioClickerGameContext';

function BioClickerGamePlayContainer() {
const { mainDisplayToggle } = useContext(BioClickerGameContext)

  return (
    <section className='bg-white grid'>
      <div className='grid grid-rows-rev'>
        {mainDisplayToggle ? (
          <section className='grid relative'>
            {/* Display Town */}
            <BioClickerPointsDataContainer />
            <TownDisplay />
          </section>
        ) : (
          <section className='grid relative'>
            {/* Display clicker */}
            <BioClickerPointsDataContainer />
            <GameAnimationsScreen />
            <AlgaeClicker />
          </section>
        )}

        <BioClickerScrollingNewBar />
      </div>
    </section>
  );
}

export default BioClickerGamePlayContainer;
