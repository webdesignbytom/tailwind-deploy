import React from 'react';
// Components
import DeveloperNavbar from '../../components/developer/DeveloperNavbar';
import DeveloperPageMainContent from '../../components/developer/DeveloperPageMainContent';

function DeveloperPage() {
  return (
    <div className='bg-white dark:bg-black grid h-screen overflow-hidden'>
      <div className='grid grid-rows-reg'>
        {/* Navigation */}
        <div className='grid h-full w-full'>
          <DeveloperNavbar />
        </div>

        {/* Main page */}
        <div className='grid h-full bg-slate-200 w-full'>
          <DeveloperPageMainContent />
        </div>
      </div>
    </div>
  );
}

export default DeveloperPage;
