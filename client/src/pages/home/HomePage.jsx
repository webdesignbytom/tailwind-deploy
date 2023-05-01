import React from 'react';
// Components
import Navbar from '../../components/navigation/Navbar';
import HomePageHeader from '../../components/home/HomePageHeader';
import GoalsContainer from '../../components/home/GoalsContainer';
import FundRaisingHomePage from '../../components/home/FundRaisingHomePage';
import FooterComponent from '../../components/footer/FooterComponent';

function HomePage() {
  return (
    <div>
      <div className='grid grid-rows-3 min-h-screen bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100'>
        <section className='grid h-screen xl:max-h-screen grid-rows-reg'>
          <Navbar />
          <HomePageHeader />
        </section>
        <section className='mb-8'>
          <GoalsContainer />
        </section>
        <FundRaisingHomePage />
      </div>
      <FooterComponent />
    </div>
  );
}

export default HomePage;
