import React, { useContext } from 'react';
// Components
import TownDisplay from '../animations/TownDisplay';
import AlgaeClicker from '../animations/AlgaeClicker';
import GameAnimationsScreen from '../animations/GameAnimationsScreen';
import BioClickerScrollingNewBar from '../animations/BioClickerScrollingNewBar';
import BioClickerPointsDataContainer from './BioClickerPointsDataContainer';
// Context
import { BioClickerGameContext } from '../../../../context/BioClickerGameContext';

function BioClickerGamePlayContainer() {
const { mainDisplayToggle } = useContext(BioClickerGameContext)

  return (
    <section className='bg-white grid'>
      <div className='grid grid-rows-rev'>

        {/* Display settings */}
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
