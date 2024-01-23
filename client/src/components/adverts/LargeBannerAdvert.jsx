import React from 'react';
// Images
import Image1 from '../../assets/images/general/laptop.jpg';
import Image2 from '../../assets/images/general/engineering.jpg';
import Image3 from '../../assets/images/general/social_media.jpg';

function LargeBannerAdvert() {
  return (
    <article className='grid relative overflow-hidden p-2 h-full w-full max-h-[220px]'>
      <div className='bg-yellow-200 grid grid-cols-3 overflow-hidden outline outline-2 outline-black rounded-lg p-1'>
        <div className='grid overflow-hidden h-fit'>
          <img src={Image1} alt='' className='object-fill' />
        </div>
        <div>
          <img src={Image2} alt='' className='object-contain' />
        </div>
        <div>
          <img src={Image3} alt='' className='object-contain' />
        </div>
      </div>

      <section className='absolute top-0 right-0'>
        <div className='bg-black w-fit'>
          <span className='text-white capitalize px-1'>ADVERT</span>
        </div>
      </section>
    </article>
  );
}

export default LargeBannerAdvert;
