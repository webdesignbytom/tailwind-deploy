import React from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import { useContext } from 'react';
import Header from '../../components/header/Header';
import {Navbar, PhoneNav } from '../../components/nav/Navbar';
import About from '../../components/about/About';

function Home() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {toggleNavigation ? (
        <PhoneNav />
      ) : (
        <div className='bg-white dark:bg-black'>
          <div className='h-screen grid lg:pt-4'>
            <Navbar />
            <Header />
            <About />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
