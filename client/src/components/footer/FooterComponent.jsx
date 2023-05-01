import React from 'react';
import { Link } from 'react-router-dom';
// Images
import MyeaLogo from '../../assets/svg/myea-logo.svg';

function FooterComponent() {
  return (
    <footer className='p-4 bg-colour-dark mt-20'>
      <Link className='cursor-pointer' to='/'>
        <img className='w-16 h-16 no__highlights' src={MyeaLogo} alt='my eco app logo' />
      </Link>
    </footer>
  );
}

export default FooterComponent;
