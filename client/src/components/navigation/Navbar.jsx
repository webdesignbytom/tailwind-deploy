import React from 'react';
import { Link } from 'react-router-dom';
// Images
import MyeaLogo from '../../assets/svg/myea-logo.svg';

function Navbar() {
  return (
    <header className='grid grid-flow-col bg-main-colour p-2 justify-between w-full border-b-4 border-solid border-green-800 h-fit items-center px-4 font-poppins'>
      <section>
        <Link className='cursor-pointer' to='/'>
          <img className='w-10 h-10' src={MyeaLogo} alt='my eco app logo' />
        </Link>
      </section>

      <nav className='text-white'>
        <ul className='grid grid-flow-col gap-6'>
          {/* Home */}
          <li>
            <Link to='/'>
              <span>Home</span>
            </Link>
          </li>
          {/* Myecohome */}
          <li>
            <Link to='/myecohome'>
              <span>Myecohome</span>
            </Link>
          </li>
          {/* About */}
          <li>
            <Link to='/about'>
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
