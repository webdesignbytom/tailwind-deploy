import React from 'react';
import { Link } from 'react-router-dom';
// Images
import Logo from '../../../../assets/images/bioClicker/logos/algae.png';

function BioClickerNavbar() {
  const toggleNavbar = () => {
    console.log('toggleNavbar');
  };

  return (
    <header className='grid h-[80px] w-full bg-[#00000060] border-b-4 border-solid border-black'>
      <section className='grid grid-cols-reg'>
        <div className='grid items-center px-8'>
          <Link to='/'>
            <img
              src={Logo}
              alt='Logo'
              className='object-contain w-[50px] h-[50px]'
            />
          </Link>
        </div>

        <div className='grid grid-cols-reg'>
          {/* Player data */}
          <div className='grid justify-start bg-blue-400'>
            <section>stuff</section>
          </div>

          {/* Navigation */}
          <div className='grid grid-cols-rev justify-end bg-orange-300'>
            <nav className='grid justify-items-end bg-purple-500'>nav</nav>

            {/* Myea logo */}
            <div className='grid items-center px-8 bg-pink-500'>
              <Link to='/'>
                <img
                  src={Logo}
                  alt='Logo'
                  className='object-contain w-[50px] h-[50px]'
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default BioClickerNavbar;
