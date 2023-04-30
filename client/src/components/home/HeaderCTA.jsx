import React from "react";
import { Link } from "react-router-dom";

function HeaderCTA() {
  return (
    <div className="grid grid-flow-col gap-6 h-fit">
      <Link to='#' className="p-2 outline-2 outline-black outline rounded-xl text-center flex items-center justify-center bg-main-colour hover:bg-colour-pale active:scale-110 duration-200 ease-in-out lg:text-base 2xl:text-xl font-semibold text-gray-100">
        <article>
          <h3>GOALS</h3>
        </article>
      </Link>
      <Link to='#' className="p-2 outline-2 outline-black outline rounded-xl text-center flex items-center justify-center bg-main-colour hover:bg-colour-pale active:scale-110 duration-200 ease-in-out lg:text-base 2xl:text-xl font-semibold text-gray-100">
        <article>
          <h3>PROJECTS</h3>
        </article>
      </Link>
      <Link to='#' className="p-2 outline-2 outline-black outline rounded-xl text-center flex items-center justify-center bg-main-colour hover:bg-colour-pale active:scale-110 duration-200 ease-in-out lg:text-base 2xl:text-xl font-semibold text-gray-100">
        <article>
          <h3>ABOUT</h3>
        </article>
      </Link>
    </div>
  );
}

export default HeaderCTA;
