import React from 'react';
import HomePageHeader from './HomePageHeader';
import HomePageAboutSection from './HomePageAboutSection';
import LargeBannerAdvert from '../adverts/LargeBannerAdvert';
import UserInfoSection from './UserInfoSection';
import AffiliatesBannerCta from './AffiliatesBannerCta';
import FooterComponent from '../footer/FooterComponent';

function HomePageMainContainer() {
  return (
    <section className='grid'>
      <div className='grid px-10 mb-10'>
        <HomePageHeader />
      </div>

      <div className='px-20 py-8'>
        <HomePageAboutSection />
      </div>

      <section className='grid w-2/3 mx-auto my-10'>
        <LargeBannerAdvert />
      </section>

      <div className='px-20 py-8'>
        <UserInfoSection />
      </div>

      <div className='mt-8 mb-20'>
        <AffiliatesBannerCta />
      </div>

      <FooterComponent />
    </section>
  );
}

export default HomePageMainContainer;
