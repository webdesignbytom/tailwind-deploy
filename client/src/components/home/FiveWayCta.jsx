import React from 'react';
// Icon
import { MdGamepad } from 'react-icons/md';
import { HiFilm, HiShoppingCart } from 'react-icons/hi';
import { FaTools, FaServer } from 'react-icons/fa';

function FiveWayCta() {
  return (
    <section className='grid justify-center'>
      <div className='grid grid-cols-5'>
        <article className='grid items-center justify-center p-2'>
          <div className='grid justify-center mb-1'>
            <MdGamepad className='text-main-colour hover:text-colour-dark cursor-pointer lg:text-6xl 2xl:text-8xl active:scale-95' />
          </div>
          <div>
            <h5 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
              <span>GAMES</span>
            </h5>
          </div>
        </article>
        <article className='grid items-center justify-center p-2'>
          <div className='grid justify-center mb-1'>
            <HiFilm className='text-main-colour hover:text-colour-dark cursor-pointer lg:text-6xl 2xl:text-8xl active:scale-95' />
          </div>
          <div>
            <h5 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
              MEDIA
            </h5>
          </div>
        </article>
        <article className='grid items-center justify-center p-2'>
          <div className='grid justify-center mb-1'>
            <FaTools className='text-main-colour hover:text-colour-dark cursor-pointer lg:text-6xl 2xl:text-8xl active:scale-95' />
          </div>
          <div>
            <h5 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
              SERVICES
            </h5>
          </div>
        </article>
        <article className='grid items-center justify-center p-2'>
          <div className='grid justify-center mb-1'>
            <FaServer className='text-main-colour hover:text-colour-dark cursor-pointer lg:text-6xl 2xl:text-8xl active:scale-95' />
          </div>
          <div>
            <h5 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
              TECH
            </h5>
          </div>
        </article>
        <article className='grid items-center justify-center p-2'>
          <div className='grid justify-center mb-1'>
            <HiShoppingCart className='text-main-colour hover:text-colour-dark cursor-pointer lg:text-6xl 2xl:text-8xl active:scale-95' />
          </div>
          <div>
            <h5 className='font-bold text-xs md:text-2xl text-center text-main-colour'>
              SHOPPING
            </h5>
          </div>
        </article>
      </div>
    </section>
  );
}

export default FiveWayCta;
