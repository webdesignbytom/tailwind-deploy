import React, { useState } from 'react';

function SponsorNavbarAdvert() {
    const [sponsorName] = useState('Cat App')

  return (
    <article className='grid items-end border-colour-dark border-2 border-solid p-2 bg-white'>
      <div className='text-center'>
        <p>Proudly Sponsored by</p>
        <p className='text-lg font-semibold'>{sponsorName}</p>
      </div>
    </article>
  );
}

export default SponsorNavbarAdvert;
