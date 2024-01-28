import React from 'react';
// Images
import CatAppLogo from '../../assets/images/logos/cat_app_logo.png';
import { useNavigate } from 'react-router-dom';

function ServicesBannerCta() {
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
            <span className='text-xl'>Our services and afflicates</span>
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
              <img src={CatAppLogo} alt='Affliiate logo' className='pr-1' />
              <div className='grid text-center'>
                <p>
                  <span className='text-xl font-semibold'>Cat App</span>
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}

export default ServicesBannerCta;
