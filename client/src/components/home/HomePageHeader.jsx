import React from "react";
// Components
import HeaderCTA from "./HeaderCTA";
// Icon
import GameIcon from '../../assets/img/space-invaders.png'
import TechIcon from '../../assets/img/technology.png'

function HomePageHeader() {
  return (
    <header id="hero" className="grid p-4 w-full">
      <div className="grid md:grid-cols-2x h-full">
        {/* Text Section Left */}
        <section className="grid h-full">
          <div className="mt-6 pl-10">
            <article className="h-fit">
              <div className="text-lg">
                <h4>Brand new web project</h4>
              </div>
              <h1 className="text-main-colour font-extrabold text-6xl lg:text-7xl 2xl:text-9xl pb-6 md:pb-8 text-center md:text-left">
                myecoapp
              </h1>
              <h2 className="font-sans text-2xl 2xl:text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 max-w-lg mb-6">
                Help The Planet <br className="hidden md:block" />
                by existing,{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  visting and sharing!
                </span>
              </h2>
              <div className="md:max-w-[80%]">
                <p className="text-text-grey leading-5 dark:text-slate-100 text-base md:text-lg font-poppins">
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
          <section className="grid bg-red-300">
            <div className="grid grid-cols-5 gap-2 ml-10 mr-20 h-fit">
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2 h-fit">
                <div>
                  <img src={GameIcon} className='w-10 h-min' alt="gaming icon" />
                </div>
                <div>
                  <h4>GAMING</h4>
                </div>
              </article>
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2">
                <div>
                  <img className='w-20' src={GameIcon} alt="" />
                </div>
                <div>
                  <h4>SERVICES</h4>
                </div>
              </article>
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <h4>SHOPPING</h4>
                </div>
              </article>
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2">
                <div>
                  <img className='w-20' src={TechIcon} alt="" />
                </div>
                <div>
                  <h4>TECHNOLOGY</h4>
                </div>
              </article>
              <article className="grid outline-2 outline-main-colour outline rounded-xl p-2">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <h4>Titles</h4>
                </div>
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
