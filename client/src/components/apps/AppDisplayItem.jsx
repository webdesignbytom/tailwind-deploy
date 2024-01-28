import React from 'react';

function AppDisplayItem({ navigateToApp, app }) {
  return (
    <article
      onClick={() => navigateToApp(app)}
      className='outline outline-main-border outline-2 rounded-lg py-2 px-2 cursor-pointer shadow-xl hover:bg-slate-200 min-h-[200px]'
    >
      <section className='grid grid-cols-rev'>
        <div className='py-1 px-2'>
          <div className=''>
            <h5 className='text-xl'>{app.title}</h5>
          </div>
          <div className='mt-2 pr-4'>
            <p className='leading-5'>{app.description}</p>
          </div>
        </div>

        <div className='w-[200px] h-[160px]'>
          <img
            src={app.imageUrl}
            alt={app.title}
            className='h-[160px] w-full object-fill'
          />
          <div className='grid mt-4'>
            <button className='grid outline outline-1 outline-black rounded-lg shadow-lg bg-main-colour hover:brightness-95 active:scale-95 px-4 py-2 cursor-pointer'>
              <span className='text-white font-bold text-xl'>Go Now</span>
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}

export default AppDisplayItem;
