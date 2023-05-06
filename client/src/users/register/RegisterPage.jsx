import React from 'react';
// Components
import Navbar from '../../components/navigation/Navbar';
import SignUpCTA from '../../components/users/SignUpCTA';

function RegisterPage() {
  return (
    <div className='bg-white dark:bg-black min-h-screen lg:max-h-screen lg:overflow-hidden lg:grid-rows-reg grid'>
      <Navbar />
      <main className='grid'>
        <div className='mt-16'>
          <SignUpCTA />
        </div>
      </main>
    </div>
  );
}

export default RegisterPage;
