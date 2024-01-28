import React from 'react';
// Components
import TopMenuBar from '../../components/general/TopMenuBar';
import Navigation from '../../components/general/Navigation';
import AbsoluteComponentsMain from '../../components/general/AbsoluteComponentsMain';
import MediaPageMainComponent from '../../components/media/MediaPageMainComponent';

function MediaMainPage() {
  return (
    <div className='h-screen max-h-screen grid nav_bg overflow-hidden'>
      <div className='grid grid-rows-reg rough_bg overflow-hidden relative'>
        {/* User menu */}
        <TopMenuBar />

        <div className='grid grid-cols-reg h-full overflow-hidden'>
          {/* Navigation - left hand side */}
          <Navigation />

          {/* Main page content */}
          <section className='grid overflow-hidden pl-1 pt-1'>
            <div className='grid bg-gray-50 rounded-tl-[150px] outline outline-black outline-2 overflow-y-scroll p-2'>
              <MediaPageMainComponent />
            </div>
          </section>
        </div>

        <AbsoluteComponentsMain />
      </div>
    </div>
  );
}

export default MediaMainPage;
