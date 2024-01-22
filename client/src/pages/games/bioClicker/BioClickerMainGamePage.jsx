import React from 'react';
// Components
import BioClickerNavbar from '../../../components/games/bioClicker/containers/BioClickerNavbar';
import BioClickerSideMenuContainer from '../../../components/games/bioClicker/containers/BioClickerSideMenuContainer';
import BioClickerGamePlayContainer from '../../../components/games/bioClicker/containers/BioClickerGamePlayContainer';
// DB
import { ItemsDB } from '../../../data/bioClicker/ItemsDB';
import { BuildingsDB } from '../../../data/bioClicker/BuildingsDB';

function BioClickerMainGamePage() {
  return (
    <div className='h-screen max-h-screen grid nav_bg overflow-hidden'>
      <div className='grid grid-rows-reg rough_bg overflow-hidden'>
        {/* Game Navigation */}
        <BioClickerNavbar />

        {/* Main Game Containers */}
        <main className='grid h-full overflow-hidden'>
          {/* Container */}
          <div className='grid h-full bg-orange-300 p-2 overflow-hidden'>
            <div className='grid grid-cols-a1a outline outline-4 outline-black rounded overflow-hidden'>
              {/* Left Panel */}
              <BioClickerSideMenuContainer displayArray={ItemsDB} />
              {/* Main Panel */}
              <BioClickerGamePlayContainer />
              {/* Right Panel */}
              <BioClickerSideMenuContainer displayArray={BuildingsDB} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BioClickerMainGamePage;
