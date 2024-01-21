import React from 'react';
import TopMenuBar from '../../components/general/TopMenuBar';
import Navigation from '../../components/general/Navigation';
import GamesMainPageContent from '../../components/games/GamesMainPageContent';

function GamesMainPage2() {
  return (
    <div className='h-screen max-h-screen grid nav_bg overflow-hidden'>
      <div className='grid grid-rows-reg rough_bg overflow-hidden'>
        {/* User menu */}
        <TopMenuBar />

        <div className='grid grid-cols-reg h-full overflow-hidden'>
          {/* Navigation - left hand side */}
          <Navigation />

          {/* Main page content */}
          <section className='grid overflow-hidden pl-1 pt-1'>
            <div className='grid bg-gray-50 rounded-tl-[150px] outline outline-black outline-2 overflow-y-scroll p-2'>
              <GamesMainPageContent />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GamesMainPage2;
