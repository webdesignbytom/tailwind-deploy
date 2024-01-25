import React, { useContext } from 'react';
// Components
import UserLevelUpContainer from '../users/UserLevelUpContainer';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import UserGainedXpPopup from './UserGainedXpPopup';
import BadgeEarnedContainer from './BadgeEarnedContainer';

function AbsoluteComponentsMain() {
  const { isLevelUpContainerOpen, isXpGainedContainerOpen, isbadgesContainerOpen } =
    useContext(ToggleContext);

  if (isLevelUpContainerOpen) {
    return (
      <div className='grid h-fit w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center bg-[#00000070] z-10'>
        <UserLevelUpContainer />
      </div>
    );
  }

  if (isXpGainedContainerOpen) {
    return (
      <div className='grid h-fit w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center z-10'>
        <UserGainedXpPopup />
      </div>
    );
  }

  if (isbadgesContainerOpen) {
    return (
      <div className='grid h-fit w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center z-10'>
        <BadgeEarnedContainer />
      </div>
    );
  }
}

export default AbsoluteComponentsMain;
