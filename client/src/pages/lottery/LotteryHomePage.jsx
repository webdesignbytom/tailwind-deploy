import React from 'react';
// Components
import Navbar from '../../components/navigation/Navbar';

function LotteryHomePage() {
  return (
    <div className='bg-white dark:bg-black min-h-screen lg:max-h-screen lg:overflow-hidden lg:grid-rows-reg grid'>
      <Navbar />
      <main className='grid'></main>
    </div>
  );
}

export default LotteryHomePage;
