import React from 'react';
// Images
import LogoNb from '../../assets/img/logos/myea_nb_160.svg';

function TopMenuBar() {
  return (
    <section className='grid lg:min-h-[75px] w-full h-full max-h-[100px] bg-slate-500'>
      <div className='grid grid-cols-reg bg-blue-400 w-full'>
        <section className='grid bg-pink-600 w-full'>
          <div className='grid bg-red-400 w-full'>
            <img src={LogoNb} alt='logo' className='bg-yellow-500' />
          </div>
        </section>

        <section className='bg-main-colour'>Data</section>
      </div>
    </section>
  );
}

export default TopMenuBar;
