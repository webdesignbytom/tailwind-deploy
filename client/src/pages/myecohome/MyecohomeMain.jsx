import React from 'react';
// Components
import Navbar from '../../components/navigation/Navbar';
// Data

function MyecohomeMain() {
  return (
    <div className='bg-main-bg-colour dark:bg-main-bg-dark-colour min-h-screen lg:max-h-screen lg:overflow-hidden grid lg:grid-rows-reg'>

      <Navbar />
      <main className='bg-red-300 grid grid-rows-reg'>
        <section className='container mt-10 px-6 mx-auto'>
          <article className='grid text-center text-gray-800'>
            <h2 className='text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mb-16 text-main-colour'>
              myecohome
            </h2>
            <div className='grid grid-cols-2'>
              <p className='leading-5 text-left'>
                <span className='font-semibold text-main-colour'>One</span> of
                the ways we can make money to help the planet. Is by offering
                you free content! It's a simple idea that can snowball into
                making a huge difference for the planet. These pages displayed
                below are part of the <span>myecohome</span> project. If you set
                your home page to one of our page options, you can donate to us
                without knowing every time you start up a web enabled device!
              </p>
              <div>
                <h3 className='font-semibold text-2xl text-right'>
                  60% Of Homepages are a search bar <br />
                  <span>
                    so why not use the google search bar through ours?
                  </span>
                </h3>
              </div>
            </div>
          </article>
        </section>

      </main>
    </div>
  );
}

export default MyecohomeMain;
