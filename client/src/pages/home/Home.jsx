import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/navigation/Navbar';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Goals from '../../components/goals/Goals';
import Funding from '../../components/funding/Funding';

function Home() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      <div className='bg-white dark:bg-black'>
        <Navbar />
        <Header />
        <About />
        <Goals />
        <Funding />
      </div>
    </>
  );
}

export default Home;
