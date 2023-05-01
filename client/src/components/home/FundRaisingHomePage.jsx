import React from 'react';
// Images
import { FundingOptions } from '../../utils/data/CompanyData';

function FundRaisingHomePage() {
  return (
    <section className='relative min-h-screen md:h-screen grid p-10 mt-10 mb-10 md:mb-0 md:mt-0'>
      <div className='grid md:grid-cols-2 gap-12'>
        <article className='md:absolute md:top-8 md:left-8 mb-10'>
          <h4 className='font-semibold text-xl text-main-colour'>
            How will we afford it?
          </h4>
          <h2 className='text-2xl font-bold'>Donate without Donating</h2>
        </article>
        {/* TEXT */}
        <section className='grid my-auto h-full'>
          <div className='grid my-auto h-full items-center'>
            <div className='h-2/3 shadow-[inset_-12px_-8px_40px_#46464620] grid'>
              <article>
                <div>
                  <h2 className='text-5xl relative text-main-colour text__stroke4 text-center z-20 my-4 font-bold'>
                    FUNDING <br />
                    PROJECTS
                  </h2>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* DISPLAY */}
        <section className='my-10 mr-10'>
          <div className='h-full'>
            <section className='bg-main-colour leaf__bg relative h-full w-2/3 pl-20 shadow-[10px_10px_0px_0px_rgba(0,0,0)]'>
              <article className='grid text-5xl md:text-7xl -top-4 text-center md:left-0 -mt-12 absolute font-bold text__stroke3 ml-6'>
                <p>INNOVATIVE</p>
                <p className='-mt-4'>FUNDING...</p>
              </article>
              <section className='grid grid-cols-2 gap-x-28 md:gap-x-48 absolute md:ml-16 mt-20 h-full w-fit'>
                {FundingOptions.map((option, index) => {
                  return (
                    <article className='h-[90px] md:h-[140px] w-[90px] md:w-[140px] outline outline-green-400 rounded outline-4 shadow-[10px_10px_0px_0px_rgba(0,0,0)]'>
                      <img
                        src={option.image}
                        className='object-cover h-full w-full'
                        alt=''
                      />
                    </article>
                  );
                })}
              </section>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}

export default FundRaisingHomePage;
