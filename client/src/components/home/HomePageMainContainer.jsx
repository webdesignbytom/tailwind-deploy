import React from 'react';
import HomePageHeader from './HomePageHeader';
import HomePageAboutSection from './HomePageAboutSection';
import LargeBannerAdvert from '../adverts/LargeBannerAdvert';
import UserInfoSection from './UserInfoSection';

function HomePageMainContainer() {
  return (
    <section className='grid'>
      <section className='grid mb-10'>
        <HomePageHeader />
      </section>

      <HomePageAboutSection />

      <section className='grid w-2/3 mx-auto my-10'>
        <LargeBannerAdvert />
      </section>

      <UserInfoSection />
    </section>
  );
}

export default HomePageMainContainer;
