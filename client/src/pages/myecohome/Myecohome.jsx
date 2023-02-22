import React from 'react'
// Context
import { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import { Navbar, PhoneNav } from '../../components/nav/Navbar';
import './myecohome.css'


function Myecohome() {
    const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {toggleNavigation ? (
        <PhoneNav />
      ) : (
        <div className='bg-white dark:bg-black relative'>
          <div className='grid lg:pt-4'>
            <Navbar />
            <h2>myecohome</h2>
          </div>
          <div className='test__img'>
            test
          </div>
        </div>
      )}
    </>
  )
}

export default Myecohome