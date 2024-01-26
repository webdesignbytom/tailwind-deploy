import React, { useContext } from 'react';
// Context
import { BioClickerGameContext } from '../../../../context/BioClickerGameContext';

function BioClickerMenuProduct({ product, purchaseAmount }) {
  const { bioClickerBuySideMenuProduct } = useContext(BioClickerGameContext);

  return (
    <li className='grid h-full max-w-[300px] 2xl:max-w-[350px]'>
      <div className='grid gap-1 overflow-hidden bg-gray-100 outline outline-1 outline-black shadow rounded p-1'>
        {/* Main section */}
        <section className='grid grid-cols-a1a rounded gap-1'>
          {/* Image of item */}
          <div className='grid'>
            <div className='grid items-center justify-center outline outline-1 outline-black shadow rounded p-1 bg-white'>
              <img
                className='object-cover w-[50px] h-[50px] rounded'
                src={product.image}
                alt={product.name}
              />
            </div>
          </div>

          <section className='grid grid-cols-2 rounded p-2 text-[10px]'>
            <div className='grid'>
              <h6>Name: </h6>
              <span>{product.name}</span>
            </div>

            <div className='grid'>
              <h6>Cost: </h6>
              <span>£ {Math.trunc(product.cost)}</span>
            </div>

            <div className='grid'>
              <h6>Type: </h6>
              <span>{product.typetitle}</span>
            </div>

            <div className='grid'>
              <h6>Effect: </h6>
              <span>+ {product.effect}</span>
            </div>
          </section>

          <section className='grid w-full'>
            <button
              className='outline outline-1 outline-black rounded hover:brightness-95 active:scale-95 py-2 px-4 bg-main-colour w-full'
              onClick={() => bioClickerBuySideMenuProduct(product, purchaseAmount)}
            >
              <span className='text-lg font-semibold text-gray-50'>BUY</span>
            </button>
          </section>
        </section>

        <section className='grid'>
          <div
            className='grid outline outline-1 outline-black rounded-sm py-1 px-1 cursor-pointer'
            title={product.desc}
          >
            <p className='leading-3 text-xs truncate'>{product.desc}</p>
          </div>
        </section>
      </div>
    </li>
  );
}

export default BioClickerMenuProduct;
