import React from 'react';
import { Link } from 'react-router-dom';
// Images
import Logo from '../../assets/images/bioClicker/logos/algae.png';

function BioClickerNavbar() {
  const toggleNavbar = () => {
    console.log('toggleNavbar');
  };

  return (
    <header className='grid h-[100px] w-full bg-[#00000060]'>
      <div className='grid grid-cols-reg'>
        <div className='grid justify-start'>
          <section>stuff</section>
        </div>
        <div className='grid justify-end'>
          <nav>nav</nav>
        </div>
      </div>
    </header>
  );
}

export default BioClickerNavbar;
