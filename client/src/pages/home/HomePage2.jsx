import React from 'react';
// Components
import TopMenuBar from '../../components/general/TopMenuBar';
import Navigation from '../../components/general/Navigation';
import HomePageMainContainer from '../../components/home/HomePageMainContainer';

function HomePage2() {
  return (
    <div className='h-screen max-h-screen grid'>
      <div className='grid grid-rows-reg bg-purple-300'>
        {/* User menu */}
        <TopMenuBar />

        <div className='grid grid-cols-reg h-full overflow-hidden'>
          {/* Navigation - left hand side */}
          <Navigation />

          {/* Main page content */}
          <section className='grid overflow-y-scroll'>
            <div className='grid bg-white rounded-tl-[150px]'>
              <HomePageMainContainer />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage2;
