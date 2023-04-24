import React from 'react';
import { Link } from 'react-router-dom';
// Context
import { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/navigation/Navbar';

function Myecohome() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <div className='bg-main-colour grid grid-rows-reg lg:max-h-screen h-screen font-poppins'>
      <Navbar />
      <section className='grid'>
        <main className='grid grid-rows-reg'>
          <section className='my-2'>
            <article className='grid text-center my-2 text-gray-100'>
              <h1 className='text-4xl font-semibold'>Myecohome</h1>
              <p className='mx-10 py-2 leading-5 text-sm'>
                <span className='font-semibold text-green-800'>One</span> of the
                ways we can make money to help the planet. Is by offering you
                free content! It's a simple idea that can snowball into making a
                huge difference for the planet. These pages displayed below are
                part of the <span>myecohome</span> project. If you set your home
                page to one of our page options, you can donate to us without
                knowing every time you start up a web enabled device!
              </p>
            </article>
          </section>

          {/* Grid */}
          <section className='grid w-[70%] mx-auto'>
            <div className='grid mb-4 grid-cols-2 gap-4'>
              <Link className='grid' to='/'>
                <section className='grid grid-rows-4x outline outline-4 outline-green-800 rounded'>
                  <section className='bg-white'>
                    a
                  </section>
                  <article className='text-center grid items-center border-t-4 border-green-800 border-solid'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </article>
                </section>
              </Link>
              <Link className='grid' to='/'>
                <section className='grid grid-rows-4x outline outline-4 outline-green-800 rounded'>
                  <section className='bg-white'>
                    a
                  </section>
                  <article className='text-center grid items-center border-t-4 border-green-800 border-solid'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </article>
                </section>
              </Link>
              <Link className='grid' to='/'>
                <section className='grid grid-rows-4x outline outline-4 outline-green-800 rounded'>
                  <section className='bg-white'>
                    a
                  </section>
                  <article className='text-center grid items-center border-t-4 border-green-800 border-solid'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </article>
                </section>
              </Link>
              <Link className='grid' to='/'>
                <section className='grid grid-rows-4x outline outline-4 outline-green-800 rounded'>
                  <section className='bg-white'>
                    a
                  </section>
                  <article className='text-center grid items-center border-t-4 border-green-800 border-solid'>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </article>
                </section>
              </Link>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default Myecohome;
