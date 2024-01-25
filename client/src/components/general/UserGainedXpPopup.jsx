import React, { useContext, useState } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function UserGainedXpPopup() {
  const [pointsGained, setPointsGained] = useState(50);

  const { closeXpMenu } = useContext(ToggleContext);

  // Close if not clicked
  setInterval(() => {
    closeXpMenu();
  }, 4000);

  return (
    <article
      onClick={closeXpMenu}
      className='grid py-8 px-5 overflow-hidden cursor-pointer'
    >
      <div className='animate-upwards'>
        <span className='text-[140px] font-bold text-main-colour text_stroke'>
          +{pointsGained}
        </span>
      </div>
    </article>
  );
}

export default UserGainedXpPopup;
