import React from "react";
// Components
import HeaderCTA from "./HeaderCTA";

function HomePageHeader() {
  return (
    <header id="hero" className="bg-red-300 grid p-4 w-full">
      <div className="grid md:grid-cols-2x h-full">
        {/* Text Section Left */}
        <section className="bg-blue-300 grid h-full">
          <div className="bg-white mt-6 pl-10 ">
            <article className="h-fit">
              <div className="text-lg">
                <h4>Brand new web project</h4>
              </div>
              <h1 className="text-main-colour font-extrabold text-8xl pb-6 md:pb-8 md:mt-10 text-center md:text-left">
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
          {/* IMages */}
          <section className="grid bg-red-200 h-full p-2">image</section>
        </section>

        {/* Phone images */}
        <section className="grid bg-yellow-400 grid-flow-col">
          <div className="w-2/5">
            <img
              className="object-cover"
              src="https://kitwind.io/assets/kometa/one-girl-phone.png"
              alt=""
            />
          </div>
          <div className="w-5/12 -ml-16 lg:-ml-32">
            <img
              className="object-cover"
              src="https://kitwind.io/assets/kometa/two-girls-phone.png"
              alt=""
            />
          </div>
        </section>
      </div>
    </header>
  );
}

export default HomePageHeader;
