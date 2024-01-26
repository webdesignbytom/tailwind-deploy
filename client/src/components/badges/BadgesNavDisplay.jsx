import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function BadgesNavDisplay() {
  const { user } = useContext(UserContext)
  let navigate = useNavigate();

  const navigatiteToProfileBadgesPage = () => {
    console.log('Xxx');
    navigate(`/profile`, { replace: true });
  }

  return (
    <section onClick={navigatiteToProfileBadgesPage} className='grid cursor-pointer'>
      <div className='neo_nav_out rounded overflow-hidden px-4 py-2'>
        <div className='bg-transparent-black rounded'>
          <span className='text-white px-4 font-semibold'>Badges: {user.profile.score}/100</span>
        </div>
      </div>
    </section>
  );
}

export default BadgesNavDisplay;
