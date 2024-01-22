import React from 'react';
import { Link } from 'react-router-dom';
// Images
import LogoNb from '../../assets/images/logos/myea_nb_160.svg';
// Imported icons
import { MdOutlineAccountCircle } from 'react-icons/md';
import BadgesNavDisplay from '../badges/BadgesNavDisplay';

function TopMenuBar() {
  return (
    <section className='grid only:w-full h-full'>
      <div className='grid grid-cols-reg w-full h-[75px]'>
        {/* Logo container */}
        <section className='grid w-full min-w-[250px] max-w-[300px]'>
          <div className='grid w-full justify-center'>
            <a href='/2'>
              <img src={LogoNb} alt='logo' className='z-20' />
            </a>
          </div>
        </section>

        <section className='grid h-[75px] w-full'>
          <div className='grid h-full grid-cols-2'>

            {/* Website Info */}
            <section className='grid'>
              <div className='grid items-center justify-items-end z-10'>
                <BadgesNavDisplay />
              </div>
            </section>
            
            {/* User Navigation */}
            <section className='grid'>
              <nav className='grid justify-end h-full'>
                <ul className='grid grid-flow-col gap-2 w-fit items-center pr-4'>
                  <li>
                    <Link to='/login'>
                      <div className='px-2 py-1'>
                        <span className='text-white text-xl font-semibold'>
                          Login
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='/account'>
                      <div className='px-2 py-1'>
                        <span className='text-white text-xl font-semibold'>
                          <MdOutlineAccountCircle size={35} />
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}

export default TopMenuBar;
