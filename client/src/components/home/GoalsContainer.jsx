import React from "react";
import TimelineHomePage from "./TimelineHomePage";

function GoalsContainer() {
  return (
    <section className="p-4 my-10">
      {/* Main */}
      <section className="min-h-screen relative grid grid-cols-2 gap-2 h-full">
        {/* Titles */}
        <article className="absolute top-8 left-8">
          <h4 className="font-semibold text-xl">What will be do?</h4>
          <h2 className="text-2xl font-bold">Our Goals</h2>
        </article>

        {/* Two side containers */}
        <section className="grid mt-10">
          <section className="grid h-2/3 my-auto items-center">
            {/* DISPLAY */}
            <div className="relative w-2/3 h-2/3 shadow-[-25px_-25px_0px_0px_rgba(74,173,55)] mx-auto">
              <div className="absolute -top-20 -left-20 z-0">
                <h3 className="text-8xl font-bold text__stroke">myecoapp</h3>
              </div>
              {/* Main article */}
              <article className="grid relative items-center z-10 shadow-[inset_-12px_-8px_40px_#46464620] justify-center h-full">
                <ol className="p-1 capitalize text-xl font-semibold grid gap-4">
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
                        <span>4.</span>Make it look easy
                      </p>
                    </div>
                  </li>
                </ol>
              </article>
              {/* IMAGES */}
              <section className="absolute grid gap-6 -bottom-20 -right-20">
                <section className="grid justify-end">
                  <article className="h-[150px] w-[150px] outline outline-green-400 outline-4 shadow-[10px_10px_0px_0px_rgba(74,173,55)]">
                    1
                  </article>
                </section>
                <section className="grid grid-flow-col gap-6">
                  <article className="h-[150px] w-[150px] outline outline-green-400 outline-4 shadow-[10px_10px_0px_0px_rgba(74,173,55)]">
                    1
                  </article>
                  <article className="h-[150px] w-[150px] outline outline-green-400 outline-4 shadow-[10px_10px_0px_0px_rgba(74,173,55)]">
                    1
                  </article>
                </section>
              </section>
            </div>
          </section>
        </section>

        {/* Right sections */}
        <section className="grid  mb-8">
          <section className="grid  h-2/3 my-auto">
            <article>
              <div>
                <h2 className="text-5xl text-gray-800 text-center font-bold">
                  OUR GOALS...
                </h2>
              </div>
              <div className="flex justify-center my-4">
                <p className="w-1/2">
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

        <section className="leaf__bg h-[100px] w-full absolute bottom-4"></section>
      </section>
    </section>
  );
}

export default GoalsContainer;
