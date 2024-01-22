import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function UserXpNavComponent() {
  const { user } = useContext(UserContext);
  return (
    <section className='grid'>
      <div className='outline-black outline-1 outline rounded-lg px-2 bg-yellow-200 overflow-hidden py-2'>
        <span>10/100</span>
      </div>
    </section>
  );
}

export default UserXpNavComponent;
