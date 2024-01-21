import React from 'react';
// Components
import BioClickerMenuProduct from './BioClickerMenuProduct';

function BioClickerSideMenuContainer({ displayArray }) {
  return (
    <section className='grid overflow-hidden'>
      <div className='grid grid-rows-reg bg-slate-500 p-1 overflow-hidden'>

        {/* Header */}
        <article className='grid p-1 text-center'>
          <div className='outline outline-2 outline-black w-full bg-gray-50 rounded py-1'>
            <h3 className='text-xl font-semibold'>{displayArray.title}</h3>
          </div>
        </article>

        {/* List of items */}
        <div className='grid overflow-hidden p-1 overflow-y-scroll'>
          <ol className='grid gap-2 outline outline-2 outline-black rounded overflow-y-scroll p-1'>
            {displayArray.content.map((product, index) => {
              return <BioClickerMenuProduct key={index} product={product} />;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default BioClickerSideMenuContainer;
