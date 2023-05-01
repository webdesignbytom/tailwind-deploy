import React from "react";
// Components
import TimelineHomePage from "./TimelineHomePage";
// Images
import { GoalsList } from '../../utils/data/CompanyData';


function GoalsContainer() {
  return (
    <section className="p-4 -mt-16 md:-mt-0">
      {/* Main */}
      <section className="relative grid md:grid-cols-2 gap-2 h-full">
        {/* Titles */}
        <article className="md:absolute md:top-8 md:left-8 mb-10">
          <h4 className="font-semibold text-xl">What will be do?</h4>
          <h2 className="text-2xl font-bold">Our Goals</h2>
        </article>

        {/* Two side containers */}
        <section className="grid">
          <section className="grid md:h-2/3 md:my-auto items-center">
            {/* DISPLAY */}
            <div className="relative md:w-2/3 md:h-2/3 shadow-[-25px_-25px_0px_0px_rgba(74,173,55)] mx-auto">
              <div className="absolute md:-top-20 md:-left-20 z-0 my-4 md:my-0">
                <h3 className="hidden md:grid text-3xl md:text-8xl font-bold text__stroke">myecoapp</h3>
              </div>
              {/* Main article */}
              <article className="grid relative items-center z-10 shadow-[inset_-9px_-6px_20px_#46464620] md:shadow-[inset_-12px_-8px_40px_#46464620] justify-center h-full">
                <ol className="px-1 py-6 capitalize text-xl font-semibold grid gap-2 xl:gap-4">
                  <li>
                    <div>
                      <p>
                        <span>1.</span>Solar Panels To The People
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>
                        <span>2.</span>Build wild animal sanctuaries
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>
                        <span>3.</span>Help People save money
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>
                        <span>4.</span>Make it look easy!
                      </p>
                    </div>
                  </li>
                </ol>
              </article>
              {/* IMAGES */}
              <section className="absolute grid grid-flow-col md:grid-flow-row gap-6 -bottom-24 z-10 md:-right-24">
                <section className="grid justify-end">
                  <article className="h-[75px] md:h-[150px] w-[75px] md:w-[150px] outline outline-green-400 outline-4 shadow-[10px_10px_0px_0px_rgba(74,173,55)]">
                    <img src={GoalsList[0].image} className='object-cover h-full w-full' alt="" />
                  </article>
                </section>
                <section className="grid grid-flow-col gap-6">
                  <article className="h-[75px] md:h-[150px] w-[75px] md:w-[150px] outline outline-green-400 outline-4 shadow-[10px_10px_0px_0px_rgba(74,173,55)]">
                    <img src={GoalsList[1].image} className='object-cover h-full w-full' alt="" />
                  </article>
                  <article className="h-[75px] md:h-[150px] w-[75px] md:w-[150px] outline outline-green-400 outline-4 shadow-[10px_10px_0px_0px_rgba(74,173,55)]">
                    <img src={GoalsList[2].image} className='object-cover h-full w-full' alt="" />
                  </article>
                </section>
              </section>
            </div>
          </section>
        </section>

        {/* Right sections */}
        <section className="grid mb-8">
          <section className="grid h-2/3 my-auto">
            <article>
              <div>
                <h2 className="text-2xl md:text-5xl relative text-gray-800 text-center z-20 font-bold">
                  OUR GOALS...
                  <span className="text-4xl md:text-8xl top-0 left-0 ml-6 -mt-6 md:-mt-16 absolute font-bold text-main-colour text__stroke2 z-0">OUR GOALS</span>
                </h2>
              </div>
              <div className="flex justify-center my-4">
                <p className="md:w-2/3">
                  The funds we raised need to have a goal that people can get
                  behind. Our project relies on this site and our project
                  reaching as many people as possible. Growing exponentially to
                  allow us to help more people. We have three main goals we hope
                  to achieve. They are designed to make people appreciate what
                  environmental conciousness can do for a community. Instead of
                  blocking their roads we want to improve their lives by
                  improving their environment.
                </p>
              </div>
            </article>
            {/* Timeline */}
            <TimelineHomePage />
          </section>
        </section>
      </section>
    </section>
  );
}

export default GoalsContainer;
