import React from 'react';
import { Link } from 'react-router-dom'
// Components
import Navbar from '../../components/navigation/Navbar';

function NewsletterSignup() {
  const myComponentStyle = {
    background: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(20px)',
    zIndex: 1,
  };

  return (
    <div className='bg-white dark:bg-black min-h-screen lg:max-h-screen lg:grid-rows-reg grid'>
      <Navbar />
      <main className='h-full grid'>
        <div class='container px-6 mx-auto lg:mt-5'>
          <section class='text-gray-800 text-center lg:text-left'>
            <div class='px-6 py-12 md:px-12'>
              <div class='container mx-auto xl:px-32'>
                <section class='grid lg:grid-cols-2 items-center'>
                  <article class='md:mt-12 lg:mt-0 mb-12 lg:mb-0'>
                    <div
                      style={myComponentStyle}
                      class='relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14'
                    >
                      <h1 class='text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6'>
                        Are you ready <br />
                        <span class='text-main-colour'>
                          to help <span className='italic'>everything</span> ?
                        </span>
                      </h1>
                      <h2 class='text-xl md:text-2xl xl:text-3xl font-bold tracking-tight mb-3'>
                        Join out mailing list to hear about upcoming projects
                        and events.
                      </h2>
                      <section class='md:flex flex-row my-2'>
                        <input
                          type='text'
                          class='form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                          placeholder='Enter your email'
                        />
                        <button
                          type='submit'
                          class='inline-block px-7 py-3 bg-main-colour text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-dark hover:shadow-lg focus:bg-colour-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
                          data-mdb-ripple='true'
                          data-mdb-ripple-color='light'
                        >
                          Subscribe
                        </button>
                      </section>
                      <article>
                        <h3 class='text-xl tracking-tight mb-3'>Sponsorship money. from our newsletter goes towards our community and environmental <Link to='/our-goals'><span className='font-semibold text-main-colour italic underline'>goals.</span></Link></h3>
                      </article>
                      <section></section>
                    </div>
                  </article>
                  <div class='md:mb-12 lg:mb-0'>
                    <img
                      src='https://mdbootstrap.com/img/new/ecommerce/vertical/056.jpg'
                      class='w-full rounded-lg shadow-lg rotate-lg-6'
                      alt=''
                    />
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NewsletterSignup;
