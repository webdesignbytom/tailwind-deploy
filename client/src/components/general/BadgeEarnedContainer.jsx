import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Images
import Badge1 from '../../assets/images/badges/badge1.png';

function BadgeEarnedContainer() {
  const { closeBadgeEarnedDisplay } = useContext(ToggleContext);

  return (
    <article
      onClick={closeBadgeEarnedDisplay}
      className='grid py-8 px-5 overflow-hidden cursor-pointer'
    >
      <div className=''>
        <span className='text-[140px] font-bold text-main-colour text_stroke'>
          <img src={Badge1} alt='Badge' />
        </span>
      </div>
    </article>
  );
}

export default BadgeEarnedContainer;
