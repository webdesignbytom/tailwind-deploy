import React from 'react';
// Components
import BioClickerNavbar from '../../../components/navigation/BioClickerNavbar';
import BioClickerSideMenuContainer from '../../../components/games/bioClicker/containers/BioClickerSideMenuContainer';
// DB
import { ItemsDB } from '../../../data/bioClicker/ItemsDB';
import { BuildingsDB } from '../../../data/bioClicker/BuildingsDB';
import BioClickerGamePlayContainer from '../../../components/games/bioClicker/containers/BioClickerGamePlayContainer';

function BioClikerMainGamePage() {
  return (
    <div className='h-screen max-h-screen grid nav_bg overflow-hidden'>
      <div className='grid grid-rows-reg rough_bg overflow-hidden'>
        {/* Game Navigation */}
        <BioClickerNavbar />

        {/* Main Game Containers */}
        <main className='grid h-full overflow-hidden bg-blue-400'>
          {/* Container */}
          <div className='grid grid-cols-a1a h-full bg-green-900'>
            {/* Left Panel */}
            <BioClickerSideMenuContainer displayArray={ItemsDB} />
            {/* Main Panel */}
            <BioClickerGamePlayContainer />
            {/* Right Panel */}
            <BioClickerSideMenuContainer displayArray={BuildingsDB} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default BioClikerMainGamePage;
