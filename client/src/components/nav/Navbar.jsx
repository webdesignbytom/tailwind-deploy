import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToggleContext } from '../../context/ToggleContext';
import Logo from '../../assets/img/myea-logo.svg';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/myecohome', title: 'MyEcoHome' },
  { url: '/games', title: 'Games' },
  { url: '/account', title: 'Account' },
  { url: '/login', title: 'Login' },
  { url: '/register', title: 'Register' },
];

function Navbar() {
  const { toggleNavigation, setToggleNavigation } = useContext(ToggleContext);

  const openNavbar = () => {
    setToggleNavigation(!toggleNavigation);
  };

  return (
    <>
      <div className='flex flex-row h-min justify-between max-w-full px-8 bg-eco-green sm:flex hover:text-slate-50 items-center lg:mx-8 lg:mb-4'>
        {/* Left hand side of nav perminent */}
        <Link to='/'>
          <img src={Logo} alt='logo' className='w-12 h-12 mr-3' />
        </Link>

        {/* small screen menu */}
        <div className='flex flex-row sm:hidden justify-end'>
          <div onClick={openNavbar}>
            <span className='cursor-pointer text-white hover:text-hover-grey'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </span>
          </div>
        </div>
        {/* Large screen menu */}
        <nav className='hidden flex-row w-full justify-end items-center sm:flex'>
          <ul className='flex flex-row items-center'>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink link={link} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

function NavLink({ link }) {
  return (
    <>
      <Link
        to={link.url}
        className='block px-4 py-2 text-white hover:text-eco-green-dark font-medium text-lg'
      >
        {link.title}
      </Link>
    </>
  );
}

function PhoneNav() {
  const { setToggleNavigation } = useContext(ToggleContext);

  const closeNavbar = () => {
    setToggleNavigation(false);
  };

  return (
    <>
      <section className='grid h-screen bg-red-300'>
        <ul className='grid h-full bg-yellow-300 text-3xl'>
          <li className='bg-eco-green flex items-center justify-end pr-8'>
            <button className='text-white text-xl' onClick={closeNavbar}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </li>
          {links.map((link, index) => {
            return (
              <li key={index} className='bg-eco-green text-center '>
                <PhoneNavLink link={link} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

function PhoneNavLink({ link }) {
  return (
    <>
      <Link
        to={link.url}
        className='block px-4 py-2 text-white dark:text-black text-xl hover:text-eco-green-dark font-medium'
      >
        {link.title}
      </Link>
    </>
  );
}

export { Navbar, PhoneNav };
