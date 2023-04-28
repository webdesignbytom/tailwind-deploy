import React from "react";
import { Link } from "react-router-dom";
// Images
import MyeaLogo from "../../assets/svg/myea-logo.svg";

function Navbar({ toggleNavbar }) {
  return (
    <header className="grid grid-flow-col bg-main-colour p-2 justify-between w-full border-b-4 border-solid border-green-800 h-fit items-center px-4 font-poppins">
      <section>
        <Link className="cursor-pointer" to="/">
          <img className="w-16 h-16" src={MyeaLogo} alt="my eco app logo" />
        </Link>
      </section>

      {/* Phone Nav */}
      <nav
        onClick={() => {
          toggleNavbar();
        }}
        className="md:hidden no__highlights"
      >
        <span className="cursor-pointer text-white hover:text-hover-grey">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125"
            data-te-animation-init
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </nav>

      <nav className="text-white hidden md:grid">
        <ul className="grid grid-flow-col gap-10 text-xl mr-8">
          {/* Home */}
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          {/* Myecohome */}
          <li>
            <Link to="/myecohome">
              <span>Myecohome</span>
            </Link>
          </li>
          {/* About */}
          <li>
            <Link to="/about">
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>

      <section className="grid grid-flow-col gap-4">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </section>
    </header>
  );
}

export default Navbar;
