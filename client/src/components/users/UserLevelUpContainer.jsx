import React, { useContext } from 'react';
import { ToggleContext } from '../../context/ToggleContext';

function UserLevelUpContainer() {
  const { closeLevelUpMenu, openLevelUpMenu } = useContext(ToggleContext);

  return (
    <section className='grid h-[400px] w-[300px] overflow-hidden outline outline-2 outline-black rounded-lg'>
      <article className='grid bg-slate-200  grid-rows-rev py-2'>
        <section className='grid py-1 px-4 pb-4'>
          <div className='bg_neo rounded-lg'>
            <div className='grid items-center justify-center h-full text-center'>
              <div>
                <h4>
                  <span className='text-3xl font-bold'>LEVEL UP</span>
                </h4>
              </div>
              <div>
                <h5>
                  <span>NEW LEVEL</span>
                </h5>
              </div>
              <div>
                <h6>
                  <span>2</span>
                </h6>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='grid grid-cols-2 gap-x-2 px-2'>
            <div>
              <button
                onClick={closeLevelUpMenu}
                className='grid bg-main-colour px-4 py-2 rounded-lg outline outline-1 outline-main-colour active:scale-95 hover:brightness-95 w-full shadow-lg'
              >
                <span className='text-white font-semibold'>Share</span>
              </button>
            </div>
            <div>
              <button
                onClick={closeLevelUpMenu}
                className='grid bg-white px-4 py-2 rounded-lg outline outline-1 outline-main-colour active:scale-95 hover:brightness-95 w-full shadow-lg'
              >
                <span className='text-black font-semibold'>Close</span>
              </button>
            </div>
          </div>
        </section>
      </article>
    </section>
  );
}

export default UserLevelUpContainer;
