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
      <div className='flex flex-row justify-between max-w-full px-8 bg-eco-green sm:flex hover:text-slate-50 items-center lg:mx-8 lg:mb-4'>
        {/* Left hand side of nav perminent */}
        <Link to='/'>
          <img src={Logo} alt='logo' className='w-12 h-12 mr-3' />
        </Link>

        {/* small screen menu */}
        <div className='flex flex-row sm:hidden justify-end'>
          <div onClick={openNavbar}>
            <span className='text-slate-100 dark:text-slate-100'>=</span>
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

export default Navbar;

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
