import React from 'react'
// Context
import { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import { Navbar, PhoneNav } from '../../components/nav/Navbar';



function Myecohome() {
    const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {toggleNavigation ? (
        <PhoneNav />
      ) : (
        <div className='bg-white dark:bg-black'>
          <div className='h-screen grid lg:pt-4'>
            <Navbar />
            <h2>myecohome</h2>
          </div>
        </div>
      )}
    </>
  )
}

export default Myecohome