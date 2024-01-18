import React from 'react';
import { Link } from 'react-router-dom';
// Images
import LogoNb from '../../assets/images/logos/myea_nb_160.svg';

function TopMenuBar() {
  return (
    <section className='grid only:w-full h-full'>
      <div className='grid grid-cols-reg w-full h-[75px]'>
        {/* Logo container */}
        <section className='grid w-full min-w-[250px] max-w-[300px]'>
          <div className='grid w-full justify-center'>
            <img src={LogoNb} alt='logo' className='z-20' />
          </div>
        </section>

        <section className='grid h-[75px] w-full'>
          <div>
            <nav className='grid justify-end h-full'>
              <ul className='grid w-fit items-center pr-4'>
                <li>
                  <Link to='/login'>
                    <div className='px-2 py-1'>
                      <span className='text-white text-xl font-semibold'>Login</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </section>
  );
}

export default TopMenuBar;
