import React from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import { useContext } from 'react';
import { Navbar, PhoneNav } from '../../components/nav/Navbar';
// Images
import Default from '../../assets/img/default.png';
import { BadgeList } from '../../utils/BadgeList';
import Badges from '../../components/badges/Badges';

function Profile() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {toggleNavigation ? (
        <PhoneNav />
      ) : (
        <div className='bg-white dark:bg-black h-screen'>
          <div className='lg:pt-4'>

          <Navbar />
          </div>
          <section className='grid w-full'>
            <div className='flex justify-center my-4'>
              <h2 className='text-eco-green font-bold text-2xl'>Profile</h2>
            </div>
            <section className='grid justify-center'>
              <div className='flex justify-center mb-4'>
                <img
                  className='rounded-full w-44 h-44 border-4 border-eco-green'
                  src={Default}
                  alt='Default'
                />
              </div>
              <div>
                <section>
                  <div>
                    <h3>Badges Container</h3>
                  </div>
                  <Badges BadgeList={BadgeList} />
                </section>
                <section>
                  {/* Update form */}
                  <form className='grid justify-center gap-2'>
                    {/* <!-- Username input --> */}
                    <div>
                      <input
                        type='text'
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-eco-green focus:outline-none'
                        placeholder='Username'
                      />
                    </div>

                    <div>
                      <input
                        type='text'
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-eco-green focus:outline-none'
                        placeholder='Profile Image'
                      />
                    </div>

                    <div>
                      <input
                        type='submit'
                        value='Submit'
                        className='submit__button'
                      />
                    </div>
                  </form>
                </section>
              </div>
            </section>
          </section>
        </div>
      )}
    </>
  );
}
export default Profile;
