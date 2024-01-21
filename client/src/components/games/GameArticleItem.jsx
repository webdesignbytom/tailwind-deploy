import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GameArticleItem({ game }) {
  const [gameData] = useState(game);

  let navigate = useNavigate();

  const navigateToMyecohomePage = (gameEndpointUrl) => {
    console.log('page', gameEndpointUrl);
    navigate(`${gameEndpointUrl}`, { replace: true });
  }

  return (
    <article className='grid h-[250px]'>
      <div className='grid outline outline-1 outline-black shadow-lg overflow-hidden bg-slate-200 rounded-xl'>
        <div className='grid grid-rows-reg px-2 pt-1'>
          <div className='grid border-b-[1px] border-black border-solid w-fit pr-4'>
            <h4 className='font-semibold italic pl-[0.5px]'>
              {gameData.gameName}
            </h4>
          </div>

          <section className='grid grid-rows-rev pb-2'>
            <div className='grid grid-cols-rev mr-1 h-full bg-pink-300'>
              <section className='grid grid-rows-rev my-auto leading-5 bg-yellow-200'>
                <div className='grid gap-4 ml-1 mr-2 py-4'>
                  <div>
                    <p>{gameData.gameDescription}</p>
                  </div>
                  <div className='grid justify-items-end h-fit'>
                    <button onClick={() => navigateToMyecohomePage(gameData.gameEndpointUrl)} className='outline outline-1 outline-black rounded-xl px-4 py-2 bg-main-colour rough_bg no_hightlights'>
                      <span className='italic uppercase text-gray-50 font-bold'>
                        PLAY NOW
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              <section className='grid p-1 max-w-[200px]'>
                <div className='grid items-center'>
                  <img src={gameData.gameImageUrl} alt='Game display' />
                </div>
              </section>
            </div>
            <section className='grid border-t-[1px] border-black border-solid w-full pr-4'>
              <div className='grid grid-cols-3'>
                <div>
                  <span>Genre: {gameData.gameGenre}</span>
                </div>
                {gameData.badgesAvailable && (
                  <div>
                    <span>Badges: </span>
                    <span>🏅🎖️</span>
                  </div>
                )}
                {gameData.hasLeaderboard && (
                  <div>
                    <span>Leaderboards:</span>
                    <span>🏆🎮</span>
                  </div>
                )}
              </div>
            </section>
          </section>
        </div>
      </div>
    </article>
  );
}

export default GameArticleItem;
