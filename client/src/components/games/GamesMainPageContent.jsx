import React, { useState } from 'react';
// Components
import GameArticleItem from './GameArticleItem';
// Data
import { gamesForMainDisplayData } from '../../data/ListOfGamesArray';
// Images
import GamesMainImage from '../../assets/images/general/games.jpg';

function GamesMainPageContent() {
  const [ListOfGames] = useState(gamesForMainDisplayData);

  return (
    <main className='grid bg-gray-50'>
      <div className='grid grid-rows-reg bg-blue-200'>
        <section className='grid grid-cols-2 bg-red-300 px-10'>
          <article className='container px-10 py-10 mx-auto'>
            <div className=''>
              <h1 className='text-2xl lg:text-3xl font-semibold text-gray-800  dark:text-white'>
                <span className='font-bold text-3xl lg:text-4xl'>Games</span>{' '}
                <br /> on{' '}
                <span className='text-main-colour font-bold'>myecoapp</span>
              </h1>
            </div>

            <div className='mt-2'>
              <span className='inline-block w-40 h-1 bg-main-colour rounded-full'></span>
              <span className='inline-block w-3 h-1 ml-1 bg-main-colour rounded-full'></span>
              <span className='inline-block w-1 h-1 ml-1 bg-main-colour rounded-full'></span>
            </div>
          </article>

          <article className='bg-green-600 grid items-center justify-items-end'>
            <div className='w-1/2 grid bg-yellow-200 justify-end'>
              <h2>
                By creating <strong>free</strong> and <strong>fun</strong> to
                play games for everyone of all ages, we can help you earn money
                for our causes by playing games at home. Knowing the occasional
                advert or optional payment only benifits the environment and not
                a businesses stock.
              </h2>
            </div>
          </article>
        </section>

        {/* Dual columns */}
        <section className='grid bg-pink-500 w-full h-full'>
          <div className='grid grid-cols-rev w-full h-full px-4 py-4 ml-2'>
            {/* left */}
            <section className='grid grid-rows-reg w-full h-full bg-blue-400 '>
              {/* Options */}
              <section className='grid grid-cols-reg'>
                <div>
                  <h3 className='text-xl italic text-main-colour'>
                    Choose a game and have fun....
                  </h3>
                </div>

                <section className='grid bg-orange-500'>
                  <div className='grid justify-items-end px-4'>
                    <ul className='grid grid-flow-col w-fit gap-2 py-1'>
                      <li>
                        <button className='px-2 py-1 outline outline-1 outline-black rounded-xl rough_bg bg-blue-600 active:scale-95 shadow hover:brightness-105'>
                          <span className='text-gray-50 font-semibold'>All</span>
                        </button>
                      </li>
                      <li>
                        <button className='px-2 py-1 outline outline-1 outline-black rounded-xl rough_bg bg-blue-600 active:scale-95 shadow hover:brightness-105'>
                          <span className='text-gray-50 font-semibold'>City</span>
                        </button>
                      </li>
                      <li>
                        <button className='px-2 py-1 outline outline-1 outline-black rounded-xl rough_bg bg-blue-600 active:scale-95 shadow hover:brightness-105'>
                          <span className='text-gray-50 font-semibold'>Puzzle</span>
                        </button>
                      </li>
                      <li>
                        <button className='px-2 py-1 outline outline-1 outline-black rounded-xl rough_bg bg-blue-600 active:scale-95 shadow hover:brightness-105'>
                          <span className='text-gray-50 font-semibold'>Clicker</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </section>
              </section>

              {/* Games list */}
              <section className='grid overflow-hidden bg-orange-300 mr-4'>
                <div className='grid grid-cols-2 px-1 py-1 mt-4 gap-x-4 gap-y-4 overflow-y-scroll'>
                  {ListOfGames?.map((game, index) => {
                    return <GameArticleItem key={index} game={game} />;
                  })}
                </div>
              </section>
            </section>

            {/* right */}
            <section className='grid w-full max-w-[500px] h-full bg-red-800'>
              <div className='grid items-center'>
                <img src={GamesMainImage} alt='Games main display' />
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

export default GamesMainPageContent;
