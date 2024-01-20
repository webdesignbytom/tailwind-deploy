import React from 'react'
// Components
import TopMenuBar from '../../components/general/TopMenuBar'
import Navigation from '../../components/general/Navigation'
import DonationsPageContent from '../../components/donations/DonationsPageContent'

function DonationsPage() {
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
            <DonationsPageContent />
          </div>
        </section>
      </div>
    </div>
  </div>
  )
}

export default DonationsPage