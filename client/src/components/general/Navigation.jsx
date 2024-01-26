import React from 'react';
import { Link } from 'react-router-dom';
// Components
import SponsorNavbarAdvert from '../sponsor/SponsorNavbarAdvert';

function Navigation() {
  return (
    <div className='mt-[60px] grid grid-rows-a1a overflow-hidden'>
      <section className='grid h-full items-center text-center'>
        <span className='text-white italic font-semibold text-lg'>
          myecoapp.org
        </span>
      </section>

      <nav className='grid min-w-[250px] max-w-[300px] items-center mt-[50px] pl-1'>
        <ul className='grid h-fit'>
          <li>
            <Link to='/about-myecoapp'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-t-[2px] border-l-[2px] border-r-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>
                  About Us
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/funding2'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-l-[2px] border-r-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>
                  Funding
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/apps'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-l-[2px] border-r-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>
                  Apps
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/myecohome2'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-l-[2px] border-r-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>
                  MyEcoHome
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/games2'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-l-[2px] border-r-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>Games</span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/services'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-l-[2px] border-r-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>
                  Services
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/timeline'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-l-[2px] border-r-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>
                  Timeline
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/contact-us'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-l-[2px] border-r-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>
                  Contact
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/donations'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-l-[2px] border-r-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>
                  Donations
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to='/events'>
              <div className='text-center bg-main-colour border-solid border-black border-[1px] border-l-[2px] border-r-[2px] border-b-[2px] hover:bg-colour-dark link_shadow xl:py-1 2xl:py-2'>
                <span className='text-lg font-semibold text-white'>Events</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <section className='grid p-2'>
       <SponsorNavbarAdvert />
      </section>
    </div>
  );
}

export default Navigation;
