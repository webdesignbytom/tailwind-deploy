import React from 'react';
import { useNavigate } from 'react-router-dom';
// Images
import CatAppLogo from '../../assets/images/logos/cat_app_logo.png';
import BoredUserLogo from '../../assets/images/logos/bored_user_logo.png';
import EcoShopLogo from '../../assets/images/logos/eco_shop_logo.png';
import TavyEpoxyLogo from '../../assets/images/logos/tavyepoxy_logo.png';
import CosmicCorsairLogo from '../../assets/images/logos/cosmic_corsair.png';

function AffiliatesBannerCta() {
  let navigate = useNavigate();

  const navigateToPage = (event) => {
    console.log('event.id', event.id);
    // navigate(`${event.id}`, { replace: true });
  };

  return (
    <section className='grid my-10 w-2/3 mx-auto h-full'>
      <div className='grid grid-rows-reg'>
        <section className='grid'>
          <div className='grid text-center border-b-2 border-solid border-gblack w-1/2 mx-auto pb-1'>
            <span className='text-xl'>Our Sponsors and Friends</span>
          </div>
        </section>
        {/* Article icons */}
        <section className='grid grid-cols-5 mt-6'>
          {/* Item */}
          <article
            id='cat_app'
            onClick={navigateToPage}
            className='grid h-fit w-fit cursor-pointer'
          >
            <div className='p-4'>
              <img src={CatAppLogo} alt='Affliiate logo' className='pr-1' />
              <div className='grid text-center'>
                <p>
                  <span className='text-xl font-semibold'>Cat App</span>
                </p>
              </div>
            </div>
          </article>
          {/* Item */}
          <article
            id='cat_app'
            onClick={navigateToPage}
            className='grid h-fit w-fit cursor-pointer'
          >
            <div className='p-4'>
              <img src={BoredUserLogo} alt='Affliiate logo' className='pr-1' />
              <div className='grid text-center'>
                <p>
                  <span className='text-xl font-semibold'>The Bored User</span>
                </p>
              </div>
            </div>
          </article>
          {/* Item */}
          <article
            id='cat_app'
            onClick={navigateToPage}
            className='grid h-fit w-fit cursor-pointer'
          >
            <div className='p-4'>
              <img src={EcoShopLogo} alt='Affliiate logo' className='pr-1' />
              <div className='grid text-center'>
                <p>
                  <span className='text-xl font-semibold'>My Eco Shop</span>
                </p>
              </div>
            </div>
          </article>
          {/* Item */}
          <article
            id='cat_app'
            onClick={navigateToPage}
            className='grid h-fit w-fit cursor-pointer'
          >
            <div className='p-4'>
              <img src={TavyEpoxyLogo} alt='Affliiate logo' className='pr-1' />
              <div className='grid text-center'>
                <p>
                  <span className='text-xl font-semibold'>TavyEpoxy</span>
                </p>
              </div>
            </div>
          </article>
          {/* Item */}
          <article
            id='cat_app'
            onClick={navigateToPage}
            className='grid h-fit w-fit cursor-pointer'
          >
            <div className='p-4'>
              <img
                src={CosmicCorsairLogo}
                alt='Affliiate logo'
                className='pr-1'
              />
              <div className='grid text-center'>
                <p>
                  <span className='text-xl font-semibold'>Cosmic Corsair</span>
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default AffiliatesBannerCta;
