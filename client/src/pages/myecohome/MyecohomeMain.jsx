import React from 'react';
import { Link } from 'react-router-dom';
// Context
import { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/navigation/Navbar';

function MyecohomeMain() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <div className='bg-gray-100 grid grid-rows-reg lg:max-h-screen h-screen font-poppins'>
      <Navbar />
      <section className='grid'>
        <main className='grid grid-rows-reg'>
          <section className='my-2'>
            <article className='grid text-center my-2 text-gray-800'>
              <h1 className='text-5xl font-bold text-main-colour'>myecohome</h1>
              <p className='mx-10 py-2 leading-5 text-sm'>
                <span className='font-semibold text-main-colour'>One</span> of the
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
                <section className='grid grid-rows-4x outline outline-4 outline-main-colour rounded'>
                  <section className='bg-white'>
                    a
                  </section>
                  <article className='text-center grid items-center border-t-4 border-main-colour border-solid'>
                    <h6>Search Bar Home Page</h6>
                  </article>
                </section>
              </Link>
              <Link className='grid' to='/'>
                <section className='grid grid-rows-4x outline outline-4 outline-main-colour rounded'>
                  <section className='bg-white'>
                    a
                  </section>
                  <article className='text-center grid items-center border-t-4 border-main-colour border-solid'>
                    <h6>Gaming Home Page</h6>
                  </article>
                </section>
              </Link>
              <Link className='grid' to='/'>
                <section className='grid grid-rows-4x outline outline-4 outline-main-colour rounded'>
                  <section className='bg-white'>
                    a
                  </section>
                  <article className='text-center grid items-center border-t-4 border-main-colour border-solid'>
                    <h6>Random Facts Home Page</h6>
                  </article>
                </section>
              </Link>
              <Link className='grid' to='/'>
                <section className='grid grid-rows-4x outline outline-4 outline-main-colour rounded'>
                  <section className='bg-white'>
                    a
                  </section>
                  <article className='text-center grid items-center border-t-4 border-main-colour border-solid'>
                    <h6>Today I Learned Home Page</h6>
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

export default MyecohomeMain;
