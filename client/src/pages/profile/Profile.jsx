import React from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import { useContext } from 'react';
import { Navbar, PhoneNav } from '../../components/nav/Navbar';
// Images
import Default from '../../assets/img/default.png';
import { BadgeList } from '../../utils/BadgeList'

function Profile() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {toggleNavigation ? (
        <PhoneNav />
      ) : (
        <div className='bg-white dark:bg-black'>
          <Navbar />
          <section className='grid w-full'>
            <div className='flex justify-center mt-4'>
              <h2 className='text-eco-green font-bold'>Profile</h2>
            </div>
            <section className='grid justify-center mt-2'>
              <div className='flex justify-center mb-4'>
                <img
                  className='rounded-full w-36 h-36 border-4 border-eco-green'
                  src={Default}
                  alt='Default'
                />
              </div>
              <div>
                <section>
                  <div>
                    <h3>Badges Container</h3>
                  </div>
                  <div className='grid grid-cols-5'>
                      {BadgeList.map((badge, index) => {
                        return (
                          <>
                            <article key={index}>
                              <h3>{badge.name}</h3>
                              <img src={badge.icon} alt="icon" />
                            </article>
                          </>
                        )
                      })}
                  </div>
                </section>
                <section>
                  <form>
                    {/* <!-- Email input --> */}
                    <div className='mb-6'>
                      <input
                        type='text'
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-eco-green focus:outline-none'
                        placeholder='Email address'
                      />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className='mb-6'>
                      <input
                        type='password'
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-eco-green focus:outline-none'
                        placeholder='Password'
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
