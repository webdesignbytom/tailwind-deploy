import React from 'react'
import { ToggleContext } from '../../context/ToggleContext';
import { useContext } from 'react';
import { Navbar, PhoneNav } from '../../components/nav/Navbar';

function Account() {
    const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {toggleNavigation ? (
        <PhoneNav />
      ) : (
        <div className='bg-white dark:bg-black'>
          <div className='h-screen grid lg:pt-4'>
            <Navbar />
            <h2>account</h2>
          </div>
        </div>
      )}
    </>
  )
}

export default Account