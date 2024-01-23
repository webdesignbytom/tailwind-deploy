import React, { useContext } from 'react';
// Components
import UserLevelUpContainer from '../users/UserLevelUpContainer';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function AbsoluteComponentsMain() {
  const { toggleLevelUpContainer } = useContext(ToggleContext);

  if (toggleLevelUpContainer) {
    return (
      <div className='grid h-full w-full absolute justify-center items-center bg-[#00000070] z-10'>
        <UserLevelUpContainer />
      </div>
    );
  }
}

export default AbsoluteComponentsMain;
