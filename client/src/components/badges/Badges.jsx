import React from 'react';

function Badges({ BadgeList }) {
  return (
    <>
      <div className='grid grid-cols-5'>
        {BadgeList.map((badge, index) => {
          return (
            <article key={index}>
              <img src={badge.icon} alt='icon' />
            </article>
          );
        })}
      </div>
    </>
  );
}

export default Badges;
