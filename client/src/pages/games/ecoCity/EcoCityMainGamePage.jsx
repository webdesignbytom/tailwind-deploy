import React from 'react';
import EcoCityTopMenuBar from '../../../components/games/ecoCity/containers/EcoCityTopMenuBar';
import EcoCityMainGameCanvas from '../../../components/games/ecoCity/animations/EcoCityMainGameCanvas';

function EcoCityMainGamePage() {
  return (
    <div className='grid h-screen max-h-screen w-full bg-yellow-100 overflow-hidden'>
      <div className='grid p-2 overflow-hidden'>
        <main className='grid overflow-hidden bg-red-200 outline outline-4 outline-amber-800 rounded-lg'>
          <div className='grid grid-rows-reg h-full w-full overflow-hidden relative'>
            {/* Top menu */}
            <EcoCityTopMenuBar />

            {/* Game canvas */}
            <div className='grid absolute z-10 h-full w-full bg-green-200 overflow-hidden'>
              <EcoCityMainGameCanvas />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EcoCityMainGamePage;
