import React from 'react';
import GameAnimationsScreen from '../animations/GameAnimationsScreen';
import BioClickerScrollingNewBar from '../animations/BioClickerScrollingNewBar';
import AlgaeClicker from '../animations/AlgaeClicker';
import BioClickerPointsDataContainer from './BioClickerPointsDataContainer';

function BioClickerGamePlayContainer() {
  return (
    <section className='bg-white grid'>
      <div className='grid grid-rows-rev'>
        <section className='grid relative'>
          <BioClickerPointsDataContainer />
          <GameAnimationsScreen />
          <AlgaeClicker />
        </section>
        <BioClickerScrollingNewBar />
      </div>
    </section>
  );
}

export default BioClickerGamePlayContainer;
