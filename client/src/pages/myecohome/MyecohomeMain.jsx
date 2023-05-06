import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/navigation/Navbar';
import { myecohomeOptionsArray } from '../../utils/data/CompanyData';

function MyecohomeMain() {
  return (
    <div className='bg-white dark:bg-black min-h-screen lg:max-h-screen lg:overflow-hidden grid lg:grid-rows-reg'>
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

        {/* Grid */}
        <section className='container px-6 mx-auto grid grid-cols-1a1 bg-blue-400 h-full py-6'>
          <section className=''>
            {myecohomeOptionsArray.map((option, index) => {
              if (index <= 2) {
                return (
                  <article key={index}>
                    <h3>{option.title}</h3>
                  </article>
                );
              } else {
                return null;
              }
            })}
          </section>
          <section>
            <div className='grid items-center h-full bg-yellow-100'>
              <img
                className='w-full mx-auto'
                src='https://kitwind.io/assets/kometa/one-girl-phone.png'
                alt=''
              />
            </div>
          </section>
          {/* Thirds */}
          <section className='bg-red-400'>
            <div className='ml-4 grid gap-6 h-full p-2'>
              {myecohomeOptionsArray.map((option, index) => {
                if (index > 2) {
                  return (
                    <article
                      key={index}
                      className='grid grid-cols-x3 outline outline-green-400 outline-4 rounded shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'
                    >
                      <div className=''>
                        <img
                          className='object-cover h-full'
                          src='https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg'
                          alt=''
                        />
                      </div>

                      <div>
                        <h3>{option.title}</h3>
                        <p>{option.content}</p>
                      </div>
                    </article>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default MyecohomeMain;
