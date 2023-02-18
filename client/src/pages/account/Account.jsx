import React from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, PhoneNav } from '../../components/nav/Navbar';

function Account() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {toggleNavigation ? (
        <PhoneNav />
      ) : (
        <div className='bg-white dark:bg-black'>
          <div className='grid lg:pt-4'>
            <Navbar />
          </div>
          <section className='bg-eco-green dark:bg-black mt-4 lg:mx-8 grid'>
            <div>
              <h2 className='text-2xl text-white'>Account</h2>
            </div>
            {/* Options */}
            <div className='grid lg:grid-cols-3'>
              {/* Personal Data */}
              <section>
                <h3>Personal Data</h3>
                <ul>
                  <li>
                    <Link to='/profile'>Profile Information</Link>
                  </li>
                </ul>
              </section>
              {/* Game Data */}
              <section>
                <h3>Game Data</h3>
              </section>
              {/* Privacy Data */}
              <section>
                <h3>Privacy Data</h3>
              </section>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default Account;
