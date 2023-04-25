import React from 'react';
import { Link } from 'react-router-dom';
// Components
import GoogleSearch from '../../components/search/GoogleSearch';
import Navbar from '../../components/navigation/Navbar';
// Images

function TemporaryHome() {
  return (
    <div className='bg-white dark:bg-gray-800 z-0 grid grid-rows-reg h-screen w-full font-poppins'>
      <Navbar />
      <main className='relative grid grid-rows-1a1 w-full'>
        <div className='grid absolute w-full h-full bg-green-bg bg-right z-10'></div>
        {/* Header text */}
        <section className='grid z-20'>
          <article className='grid items-center h-full'>
            <div className='grid h-fit justify-center'>
              <div className='flex justify-center'>
                <div className='flex items-center outline outline-8 bg-transparent-white outline-main-colour rounded w-fit p-4'>
                  <h1 className='flex items-center text-5xl font-extrabold'>
                    Welcome to{' '}
                    <span className='text-green-900 pl-4'> MyEcoApp!</span>
                  </h1>
                </div>
              </div>

              <h2 className='text-xl font-semibold pt-4'>
                A new web based environment program with plans to help the
                planet and the people!
              </h2>
            </div>
          </article>
        </section>
        <section className='grid gap-4 w-1/2 mx-auto z-20'>
          <div className='grid outline outline-4 bg-transparent-white outline-green-800 rounded px-4 items-center h-fit'>
            <div className='grid'>
              <article>
                <p className='py-1 '>
                  While we are in development, you can still help and donate to
                  our causes - without using your own money! Just use the google
                  search bar below to get us paid a small commission per search.
                  Sign up now and we will add you to the notification list when
                  we relaunch our app!
                </p>
              </article>
            </div>
          </div>
          <GoogleSearch />
        </section>

        {/* CTA */}
        <section className='grid z-20 items-center'>
          <div className='mx-auto'>
            <section className='p-10 grid grid-cols-3 gap-4'>
              <Link
                to='/newsletter'
                className='outline outline-4 outline-green-800 rounded-lg p-2 grid items-center justify-center text-center text-xl font-semibold bg-main-colour hover:bg-green-400 hover:text-gray-100'
              >
                <article>
                  <h5>Sign Up For Newsletter</h5>
                </article>
              </Link>
              <Link
                to='/register'
                className='outline outline-4 outline-green-800 rounded-lg p-2 grid items-center justify-center text-center text-xl font-semibold bg-main-colour hover:bg-green-400 hover:text-gray-100'
              >
                <article>
                  <h5>Join As A Member</h5>
                </article>
              </Link>
              <Link
                to='/about'
                className='outline outline-4 outline-green-800 rounded-lg p-2 grid items-center justify-center text-center text-xl font-semibold bg-main-colour hover:bg-green-400 hover:text-gray-100'
              >
                <article>
                  <h5>Find Out More</h5>
                </article>
              </Link>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TemporaryHome;
