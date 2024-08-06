import React from 'react';
// Images
import BackgroundImage from '../../assets/images/general/green_trees_power_icon_in_nature.jpg';
import MyeaLogo from '../../assets/images/logos/my_eco_app_main_logo.svg';
import { Link } from 'react-router-dom';
import { NEWSLETTER_SIGNUP_URL } from '../../utils/Constants';

function SiteDownPage() {
  return (
    <div
      className='grid min-h-screen lg:overflow-hidden bg-main-colour'
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='grid relative items-center justify-center px-4'>
        <section className='absolute top-6 left-6'>
          <div>
            <img
              src={MyeaLogo}
              alt='Myecoapp logo'
              className='w-8 h-8 lg:w-20 lg:h-20 rounded'
            />
          </div>
        </section>

        <article className='grid gap-4 bg-transparent-black text-center py-4 px-2 rounded-lg'>
          <h1 className='text-white font-bold font-ecoapp text-4xl'>
            MYECOAPP
          </h1>
          <h2 className='text-white font-bold font-ecoapp'>
            Is currenly down for upgrades and will return soon with a new app.
          </h2>
        </article>

        <section className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
          <div className='text-white'>
            <Link
              to={NEWSLETTER_SIGNUP_URL}
              className='underline active:scale-95 hover:brightness-90'
            >
              Join Newsletter
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SiteDownPage;
