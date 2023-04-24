import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Goals from '../../components/goals/Goals';
import Funding from '../../components/funding/Funding';

function AboutPage() {
  return (
    <div className='bg-main-colour grid grid-rows-reg lg:max-h-screen h-screen font-poppins'>
      <Navbar />
      <Header />
      <About />
      <Goals />
      <Funding />
    </div>
  );
}

export default AboutPage;
