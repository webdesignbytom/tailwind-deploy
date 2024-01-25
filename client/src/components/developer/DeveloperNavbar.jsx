import React from 'react';
// Images
import LogoNb from '../../assets/images/logos/myea_nb_160.svg';

function DeveloperNavbar() {
  return (
    <div className='grid max-h-[80px] w-full'>
      <header className='grid bg-main-colour w-full'>
        <section className='grid px-4'>
          <div className='grid grid-cols-reg gap-x-10'>
            {/* Logo */}
            <section className='grid w-full justify-center'>
              <a href='/2'>
                <img src={LogoNb} alt='logo' className='object-cover w-20' />
              </a>
            </section>

            {/* Main */}
            <section className='grid justify-items-end items-center pr-4'>
                Stufff
            </section>
          </div>
        </section>
      </header>
    </div>
  );
}

export default DeveloperNavbar;
