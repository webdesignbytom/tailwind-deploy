import React from 'react';

function EcoHomeItem({ page, navigateToMyecohomePage }) {
  return (
    <article
      onClick={() => navigateToMyecohomePage(page)}
      className='outline outline-main-border outline-2 rounded-lg py-2 px-2 cursor-pointer'
    >
      <section className='grid grid-cols-rev'>
        <div>
          <div>
            <h5>{page.title}</h5>
          </div>
          <div>
            <p>{page.content}</p>
          </div>
        </div>
        <div className='w-[180px]'>
          <img src={page.image} alt={page.title} />
        </div>
      </section>
    </article>
  );
}

export default EcoHomeItem;
