import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import { Navbar, PhoneNav } from '../../components/nav/Navbar';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Goals from '../../components/goals/Goals';
import Funding from '../../components/funding/Funding';

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
            <Goals />
            <Funding />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
