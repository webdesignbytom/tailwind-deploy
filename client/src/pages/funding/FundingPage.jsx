import React from 'react';
// Components
import Navbar from '../../components/navigation/Navbar';
import FooterComponent from '../../components/footer/FooterComponent';
// Data
import { FundingOptions } from '../../utils/data/CompanyData';

function FundingPage() {
  return (
    <div className='bg-white dark:bg-black min-h-screen lg:grid-rows-reg grid'>
      <Navbar />
      <main className='grid '>
        {/* ONE - THREE */}
        <div className='container mb-20 mt-10 px-6 mx-auto'>
          <section className='mb-2 text-gray-800 text-center lg:text-left'>
            <article>
              <h2 className='text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mb-16 text-center text-main-colour'>
                Funding With Content
              </h2>
              <section className='mb-10'>
                <p className='text__container mx-6'>
                  <span className='font-extrabold'>
                    A new method for a new goal.
                  </span>{' '}
                  Gone are the days where we need to employ people to shake a
                  charity tin in the street. To raise funds we want to try a new
                  method. Not soliciting donations from the community but asking
                  for their attention and time when online. Now we can earn
                  money from a stream of online data and advertising methods
                  without you having to give us anything. Everytime you log on
                  to a device we can translate that into a small payment,
                  getting more people behind us as we grow.
                </p>
                <p className='text__container mx-6'>
                  Below we have laid out just a few methods of how we can work
                  together to benifit the planet. Not only do you not have to
                  donate any money. We save money by having an online presence
                  unlike other charities paying huge amounts for buildings,
                  staff and travel.
                </p>
              </section>
            </article>

            <div className='grid lg:grid-cols-3 gap-x-6 lg:gap-x-12 '>
              <div
                className='bg-white block rounded-lg mb-6 lg:mb-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                  <img
                    src={FundingOptions[0].image}
                    className='w-full rounded-t-lg'
                    alt='thing'
                  />
                  <a href='#!'>
                    <div
                      className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </a>
                  <svg
                    className='absolute'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'
                    style={{ left: '0', bottom: '0' }}
                  >
                    <path
                      fill='#fff'
                      d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                    ></path>
                  </svg>
                </div>
                <div className='p-6'>
                  <h5 className='font-bold text-lg mb-3'>
                    {FundingOptions[0].title}
                  </h5>
                  <p className='mb-4 pb-2'>{FundingOptions[0].content}</p>
                  <a
                    href='#!'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    className='inline-block px-6 py-2.5 bg-main-colour text-white font-medium text-xs leading-tight uppercase rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-colour-dark hover:shadow-lg focus:bg-colour-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Learn more
                  </a>
                </div>
              </div>

              <div className='bg-white block rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] mb-6 lg:mb-0'>
                <div
                  className='relative overflow-hidden bg-no-repeat bg-cover'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  <img
                    src={FundingOptions[1].image}
                    className='w-full rounded-t-lg'
                    alt='thing'
                  />
                  <a href='#!'>
                    <div
                      className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </a>
                  <svg
                    className='absolute'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'
                    style={{ left: '0', bottom: '0' }}
                  >
                    <path
                      fill='#fff'
                      d='M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                    ></path>
                  </svg>
                </div>

                <div className='p-6'>
                  <h5 className='font-bold text-lg mb-3'>
                    {FundingOptions[1].title}
                  </h5>
                  <p className='mb-4 pb-2'>{FundingOptions[1].content}</p>
                  <a
                    href='#!'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    className='inline-block px-6 py-2.5 bg-main-colour text-white font-medium text-xs leading-tight uppercase rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-colour-dark hover:shadow-lg focus:bg-colour-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Learn more
                  </a>
                </div>
              </div>

              <div className='bg-white block rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
                <div
                  className='relative overflow-hidden bg-no-repeat bg-cover'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  <img
                    src={FundingOptions[2].image}
                    className='w-full rounded-t-lg'
                    alt='thing'
                  />
                  <a href='#!'>
                    <div
                      className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </a>
                  <svg
                    className='absolute'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'
                    style={{ left: '0', bottom: '0' }}
                  >
                    <path
                      fill='#fff'
                      d='M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                    ></path>
                  </svg>
                </div>
                <div className='p-6'>
                  <h5 className='font-bold text-lg mb-3'>
                    {FundingOptions[2].title}
                  </h5>
                  <p className='mb-4 pb-2'>{FundingOptions[2].content}</p>
                  <a
                    href='#!'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    className='inline-block px-6 py-2.5 bg-main-colour text-white font-medium text-xs leading-tight uppercase rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-colour-dark hover:shadow-lg focus:bg-colour-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FOUR - SIX */}
        <div className='container px-6 mx-auto'>
          <section className='mb-32 text-gray-800 text-center lg:text-left'>
            <div className='grid lg:grid-cols-3 gap-x-6 lg:gap-x-12'>
              <div
                className='bg-white block rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] mb-6 lg:mb-0'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                  <img
                    src={FundingOptions[3].image}
                    className='w-full rounded-t-lg'
                    alt='thing'
                  />
                  <a href='#!'>
                    <div
                      className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </a>
                  <svg
                    className='absolute'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'
                    style={{ left: '0', bottom: '0' }}
                  >
                    <path
                      fill='#fff'
                      d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                    ></path>
                  </svg>
                </div>
                <div className='p-6'>
                  <h5 className='font-bold text-lg mb-3'>
                    {FundingOptions[3].title}
                  </h5>
                  <p className='mb-4 pb-2'>{FundingOptions[3].content}</p>
                  <a
                    href='#!'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    className='inline-block px-6 py-2.5 bg-main-colour text-white font-medium text-xs leading-tight uppercase rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-colour-dark hover:shadow-lg focus:bg-colour-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Learn more
                  </a>
                </div>
              </div>

              <div className='bg-white block rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] mb-6 lg:mb-0'>
                <div
                  className='relative overflow-hidden bg-no-repeat bg-cover'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  <img
                    src={FundingOptions[4].image}
                    className='w-full rounded-t-lg'
                    alt='thing'
                  />
                  <a href='#!'>
                    <div
                      className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </a>
                  <svg
                    className='absolute'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'
                    style={{ left: '0', bottom: '0' }}
                  >
                    <path
                      fill='#fff'
                      d='M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                    ></path>
                  </svg>
                </div>
                <div className='p-6'>
                  <h5 className='font-bold text-lg mb-3'>
                    {FundingOptions[4].title}
                  </h5>
                  <p className='mb-4 pb-2'>{FundingOptions[4].content}</p>
                  <a
                    href='#!'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    className='inline-block px-6 py-2.5 bg-main-colour text-white font-medium text-xs leading-tight uppercase rounded shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:bg-colour-dark hover:shadow-lg focus:bg-colour-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Learn more
                  </a>
                </div>
              </div>

              <div className='bg-white block rounded-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
                <div
                  className='relative overflow-hidden bg-no-repeat bg-cover'
                  data-mdb-ripple='true'
                  data-mdb-ripple-color='light'
                >
                  <img
                    src={FundingOptions[5].image}
                    className='w-full rounded-t-lg'
                    alt='thing'
                  />
                  <a href='#!'>
                    <div
                      className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
                      style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                    ></div>
                  </a>
                  <svg
                    className='absolute'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'
                    style={{ left: '0', bottom: '0' }}
                  >
                    <path
                      fill='#fff'
                      d='M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                    ></path>
                  </svg>
                </div>
                <div className='p-6'>
                  <h5 className='font-bold text-lg mb-3'>
                    {FundingOptions[5].title}
                  </h5>
                  <p className='mb-4 pb-2'>{FundingOptions[5].content}</p>
                  <a
                    href='#!'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    className='inline-block px-6 py-2.5 bg-main-colour text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-colour-dark hover:shadow-lg focus:bg-colour-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}

export default FundingPage;
