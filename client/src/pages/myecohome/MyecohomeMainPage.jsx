import React from 'react'
// Components
import TopMenuBar from '../../components/general/TopMenuBar'
import Navigation from '../../components/general/Navigation'
import MyecohomeMainPageContent from '../../components/myecohome/MyecohomeMainPageContent'

function MyecohomeMainPage() {
  return (
    <div className='h-screen max-h-screen grid overflow-hidden'>
      <div className='grid grid-rows-reg nav_bg overflow-hidden'>
        {/* User menu */}
        <TopMenuBar />

        <div className='grid grid-cols-reg h-full overflow-hidden'>
          {/* Navigation - left hand side */}
          <Navigation />

          {/* Main page content */}
          <section className='grid overflow-hidden'>
            <div className='grid bg-white rounded-tl-[150px] overflow-y-scroll p-2'>
              <MyecohomeMainPageContent />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default MyecohomeMainPage