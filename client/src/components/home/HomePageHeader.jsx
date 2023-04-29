import React from "react";
// Components
import HeaderCTA from "./HeaderCTA";

function HomePageHeader() {
  return (
    <header id="hero" className=" grid p-4 w-full">
      <div className="grid md:grid-cols-2x h-full">
        {/* Text Section Left */}
        <section className=" grid h-full">
          <div className=" mt-6 pl-10 ">
            <article className="h-fit">
              <div className="text-lg">
                <h4>Brand new web project</h4>
              </div>
              <h1 className="text-main-colour font-extrabold text-9xl pb-6 md:pb-8 md:mt-10 text-center md:text-left">
                myecoapp
              </h1>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Help The Planet <br className="hidden md:block" />
                by existing,{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  visting and sharing!
                </span>
              </h2>
              <div className="md:max-w-[80%]">
                <p className="text-text-grey dark:text-slate-100 text-base md:text-lg font-poppins">
                  Help the environment from anywhere for free! At home or at any
                  event. Use our apps to earn while you relax. We have done what
                  we can to provide entertainment for you. Check it out below.
                </p>
              </div>
            </article>
            <section className="grid md:max-w-[80%] mt-8">
              <HeaderCTA />
            </section>
          </div>

          {/* icons */}
          <section className="grid  h-full p-2">
            <div className="grid grid-cols-5 gap-2 mx-5">
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2 w-[180px] h-[180px]">
                1
              </article>
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2 w-[180px] h-[180px]">
                1
              </article>
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2 w-[180px] h-[180px]">
                1
              </article>
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2 w-[180px] h-[180px]">
                1
              </article>
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2 w-[180px] h-[180px]">
                1
              </article>
            </div>
          </section>
        </section>

        {/* Phone images */}
        <section className="grid ">
          <div className="grid relative grid-flow-col">
            <div className=" relative z-10 -ml-4 grid items-center">
              <img
                className="object-cover"
                src="https://kitwind.io/assets/kometa/one-girl-phone.png"
                alt=""
              />
            </div>
            <div className="relative z-0 grid items-center">
              <img
                className="object-cover "
                src="https://kitwind.io/assets/kometa/two-girls-phone.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}

export default HomePageHeader;
