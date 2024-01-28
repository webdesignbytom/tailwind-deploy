import React from 'react';
import HomePageHeader from './HomePageHeader';
import HomePageAboutSection from './HomePageAboutSection';
import LargeBannerAdvert from '../adverts/LargeBannerAdvert';
import UserInfoSection from './UserInfoSection';
import ServicesBannerCta from '../services/ServicesBannerCta';

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

      <ServicesBannerCta />
    </section>
  );
}

export default HomePageMainContainer;
