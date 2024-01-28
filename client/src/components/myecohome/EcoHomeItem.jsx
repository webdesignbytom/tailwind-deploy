import React from 'react';

function EcoHomeItem({ page, navigateToMyecohomePage }) {
  return (
    <article
      onClick={() => navigateToMyecohomePage(page)}
      className='outline outline-main-border outline-2 rounded-lg py-2 px-2 cursor-pointer shadow-xl hover:bg-slate-200'
    >
      <section className='grid grid-cols-rev'>
        <div className='py-1 px-2'>
          <div className=''>
            <h5 className='text-xl'>{page.title}</h5>
          </div>
          <div className='mt-2 pr-4'>
            <p className='leading-5'>{page.content}</p>
          </div>
        </div>
        <div className='w-[200px] h-[160px]'>
          <img src={page.image} alt={page.title} className='h-[160px] w-full object-fill' />
        </div>
      </section>
    </article>
  );
}

export default EcoHomeItem;
