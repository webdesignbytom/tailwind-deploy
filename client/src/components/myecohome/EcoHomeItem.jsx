import React from 'react';

function EcoHomeItem({ page }) {
  return (
    <article className='outline outline-main-border outline-2 rounded-lg py-2 px-2 cursor-pointer'>
      <div>
        <h5>{page.title}</h5>
      </div>
    </article>
  );
}

export default EcoHomeItem;
