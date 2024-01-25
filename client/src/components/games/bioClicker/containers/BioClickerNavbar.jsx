import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Images
import BioClickerLogo from '../images/logos/algae.png';
import MyeaLogo from '../../../../assets/images/logos/myea_nb_80.svg';
// Context
import { BioClickerGameContext } from '../../../../context/BioClickerGameContext';

function BioClickerNavbar() {
  const { toggleMainView, mainDisplayToggle } = useContext(BioClickerGameContext);

  return (
    <header className='grid h-[80px] w-full bg-[#00000060] border-b-4 border-solid border-black'>
      <section className='grid grid-cols-reg'>
        <div className='grid items-center px-8'>
          <Link to='/'>
            <img
              src={BioClickerLogo}
              alt='Logo'
              className='object-contain w-[50px] h-[50px]'
            />
          </Link>
        </div>

        <div className='grid grid-cols-reg'>
          {/* Player data */}
          <div className='grid justify-start items-center'>
            <section>stuff</section>
          </div>

          {/* Navigation */}
          <div className='grid grid-cols-rev justify-end'>
            <nav className='grid justify-items-end'>
              <div className='grid items-center mr-8'>
                <ul className='grid grid-flow-col gap-6 items-center'>
                  <li className='grid'>Item</li>
                  <li className='grid'>Item</li>
                  <li className='grid'>Item</li>
                  <li className='grid'>
                    <button
                      onClick={toggleMainView}
                      className='outline outline-1 outline-black rounded px-2 py-1 bg-slate-300 min-w-[120px]'
                    >
                      <span className='text-lg'>{mainDisplayToggle ?  "Algae View" : "City View"}</span>
                    </button>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Myea logo */}
            <div className='grid items-center px-8'>
              <Link to='/'>
                <img
                  src={MyeaLogo}
                  alt='Logo'
                  className='object-contain w-[50px] h-[50px]'
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default BioClickerNavbar;
