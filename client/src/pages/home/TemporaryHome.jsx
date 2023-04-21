import React from 'react';
import Search from '../../components/search/SearchBar';

function TemporaryHome() {
  return (
    <div className='bg-main-colour grid h-screen items-center justify-center w-full'>
      <main className='w-full'>
        <Search />
      </main>
    </div>
  );
}

export default TemporaryHome;
