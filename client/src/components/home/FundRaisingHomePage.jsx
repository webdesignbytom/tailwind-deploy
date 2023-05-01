import React from 'react';
// Images
import { FundingOptions } from '../../utils/data/CompanyData';

function FundRaisingHomePage() {
  return (
    <section className='h-screen grid p-10'>
      <div className='grid grid-cols-2 gap-6'>
        {/* TEXT */}
        <section className='grid my-10'>
          <div className='shadow-[inset_-12px_-8px_40px_#46464620] grid'>
            <article>
              <div>
                <h2 className='text-5xl relative text-gray-800 text-center z-20 font-bold'>
                  FUNDING <br />
                  OUR PROJECTS
                </h2>
              </div>
            </article>
          </div>
        </section>

        {/* DISPLAY */}
        <section className='my-10 mr-10'>
          <div className='h-full'>
            <section className='bg-main-colour relative h-full w-2/3 pl-20 shadow-[10px_10px_0px_0px_rgba(0,0,0)]'>
              <article className='grid text-7xl top-0 text-center leading-[48px] left-0 -mt-10 absolute font-bold text__stroke3 -ml-20'>
                <p>INNOVATIVE</p>
                <p>FUNDING...</p>
              </article>
              <section className='grid grid-cols-2 gap-x-32 absolute ml-20 mt-16 h-full w-fit'>
                {FundingOptions.map((option, index) => {
                  return (
                    <article className='h-[150px] w-[150px] outline outline-green-400 rounded outline-4 shadow-[10px_10px_0px_0px_rgba(0,0,0)]'>
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
