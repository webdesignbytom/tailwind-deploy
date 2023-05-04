import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/navigation/Navbar';

function NewsletterSignup() {
  const [newsletterSignupData, setNewsletterSignupData] = useState({
    email: '',
  });

  const myComponentStyle = {
    background: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(20px)',
    zIndex: 1,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewsletterSignupData({
      ...newsletterSignupData,
      [name]: value,
    });
  };

  const handleSubmitNewsletterSignUp = (event) => {
    console.log('submit');
    event.preventDefault();
  };

  return (
    <div className='bg-white dark:bg-black min-h-screen lg:max-h-screen lg:overflow-hidden lg:grid-rows-reg grid'>
      <Navbar />
      <main className='grid'>
        <div className='container px-6 mx-auto'>
          <section className='text-gray-800 text-center lg:text-left'>
            <div className='px-6 md:px-12'>
              <div className='container mx-auto my-10 xl:px-32'>
                <section className='grid lg:grid-cols-2 items-center'>
                  <article className='md:mt-12 lg:mt-0 mb-12 lg:mb-0'>
                    <div
                      style={myComponentStyle}
                      className='relative block rounded-lg shadow-lg px-6 py-12 md:px-20 lg:-mr-14'
                    >
                      <h1 className='text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6'>
                        Are you ready <br />
                        <span className='text-main-colour'>
                          to help <span className='italic'>everything</span> ?
                        </span>
                      </h1>
                      <h2 className='text-xl md:text-2xl xl:text-3xl font-bold tracking-tight mb-3'>
                        Join out mailing list to hear about upcoming projects
                        and events.
                      </h2>
                      <form
                        onSubmit={handleSubmitNewsletterSignUp}
                        className='md:flex flex-row my-2'
                      >
                        <input
                          id='email'
                          type='email'
                          name='email'
                          className='form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
                          placeholder='Enter your email'
                          onChange={handleChange}
                        />
                        <button
                          type='submit'
                          className='inline-block px-7 py-3 bg-main-colour text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-dark hover:shadow-lg focus:bg-colour-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
                          data-mdb-ripple='true'
                          data-mdb-ripple-color='light'
                        >
                          Subscribe
                        </button>
                      </form>
                      <article>
                        <h3 className='text-xl tracking-tight mb-3'>
                          Sponsorship money. from our newsletter goes towards
                          our community and environmental{' '}
                          <Link to='/our-goals'>
                            <span className='font-semibold text-main-colour italic underline'>
                              goals.
                            </span>
                          </Link>
                        </h3>
                      </article>
                      <section></section>
                    </div>
                  </article>
                  <div className='md:mb-12 lg:mb-0 shadow-[5px_5px_rgba(74,_173,_55,_0.4),_10px_10px_rgba(74,_173,_55,_0.3),_15px_15px_rgba(74,_173,_55,_0.2),_20px_20px_rgba(74,_173,_55,_0.1),_25px_25px_rgba(74,_173,_55,_0.1)]'>
                    <img
                      src='https://raw.githubusercontent.com/webdesignsbytom/myecoapp-deploy/main/client/src/assets/img/myea/general-bg-myea.png'
                      className='w-full max-h-[650px] rounded-lg shadow-lg object-cover rotate-lg-6'
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
