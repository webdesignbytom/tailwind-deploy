import React from 'react';
// Components
import GoogleSearch from '../../components/search/GoogleSearch';
import Navbar from '../../components/navigation/Navbar';
// Images
import MyeaBanner from '../../assets/img/myea/myea-banner.png';

function TemporaryHome() {
  return (
    <div className='bg-main-colour grid grid-rows-reg h-screen w-full font-poppins'>
      <Navbar />
      <main className='grid grid-rows-1a1 w-full'>
        <section className='grid grid-cols-xo'>
          {/* Header text */}
          <section className='grid text-white items-center justify-start'>
            <article className='px-8'>
              <h1 className='text-5xl mb-2 font-extrabold outline outline-4 outline-white rounded py-4 px-6 w-fit'>
                Welcome to <span className='text-green-800'>MyEcoApp!</span>
              </h1>
              <h2 className='text-xl font-semibold pt-2'>
                A new web based environment program with plans to help the
                planet and the people!
              </h2>
              <p className='py-1'>
                While we are in development, you can still help and donate to
                our causes - without using your own money! Just use the google
                search bar below to get us paid a small commission per search.
                Sign up now and we will add you to the notification list when we
                relaunch our app!
              </p>
            </article>
          </section>

          <section className='p-10 grid'>
            <div className='grid outline outline-4 outline-green-800 rounded px-4 items-center'>
              <div className='grid'>
                <img
                  className='w-full'
                  src={MyeaBanner}
                  alt='Plants and power'
                />
              </div>
            </div>
          </section>
        </section>

        <section className='w-1/2 mx-auto'>
          <GoogleSearch />
        </section>

        <section></section>
      </main>
    </div>
  );
}

export default TemporaryHome;
