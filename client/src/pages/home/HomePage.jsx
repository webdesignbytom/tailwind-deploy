import React from 'react';
// Components
import Navbar from '../../components/navigation/Navbar';
import HomePageHeader from '../../components/home/HomePageHeader';
import FooterComponent from '../../components/footer/FooterComponent';

function HomePage() {
  return (
    <div className='grid lg:h-screen lg:grid-rows-reg lg:max-h-screen lg:overflow-hidden bg-gray-50 text-gray-900 dark:bg-black dark:text-gray-100'>
      <Navbar />
      <HomePageHeader />
      <section className='lg:hidden'>
        <FooterComponent />
      </section>
    </div>
  );
}

export default HomePage;
