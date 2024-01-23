import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';

function UserXpNavComponent() {
  const { user } = useContext(UserContext);

  return (
    <section className='grid'>
      <div className='neo_nav_out rounded overflow-hidden px-4 py-2'>
        <div className='bg-transparent-black rounded'>
          <span className='text-white px-4 font-semibold'>XP: 10/100</span>
        </div>
      </div>
    </section>
  );
}

export default UserXpNavComponent;
