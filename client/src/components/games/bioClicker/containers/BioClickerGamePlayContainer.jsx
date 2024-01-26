import React, { useContext } from 'react';
// Components
import TownDisplay from '../animations/TownDisplay';
import AlgaeClicker from '../animations/AlgaeClicker';
import GameAnimationsScreen from '../animations/GameAnimationsScreen';
import BioClickerScrollingNewBar from '../animations/BioClickerScrollingNewBar';
import BioClickerPointsDataContainer from './BioClickerPointsDataContainer';
// Context
import { BioClickerGameContext } from '../../../../context/BioClickerGameContext';
import BioClickerLevelData from './BioClickerLevelData';

function BioClickerGamePlayContainer() {
const { mainDisplayToggle } = useContext(BioClickerGameContext)

  return (
    <section className='bg-white grid border-l-4 border-r-4 border-solid border-black'>
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
            <BioClickerLevelData />
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
