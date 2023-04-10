import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Components
import LoginForm from './LoginForm';
import Navbar from '../../components/navigation/Navbar'
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';

function Login() {
  const { setUser } = useContext(UserContext);
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      <div className='bg-white dark:bg-black h-screen lg:grid-rows-reg lg:overflow-hidden'>
        <Navbar />
        {!toggleNavigation && (
          <section className='grid grid-rows-2 lg:grid-rows-none lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] lg:grid-cols-2 h-full'>
            {/* Main */}
            <section className='grid relative overflow-hidden px-2 lg:px-0 pt-6 lg:pt-0 lg:my-6 w-full'>
              <section className='border-black border-2 lg:border-l-0 lg:border-t-4 lg:border-b-4 lg:border-r-4 border-solid p-1'>
              </section>

              <section className='absolute grid h-full w-full z-10 justify-center items-center px-10'>
                <div className='bg-transparent-black p-2 lg:p-4'>
                  <article className='bg-black p-2 lg:p-6'>
                    <h1 className='text-white text-3xl text-center mb-5 font-bold'>
                      Login
                    </h1>
                    <h2 className='text-white mx-auto text-center lg:max-w-[50%]'>
                      Login and gain access to{' '}
                      <span className='text-hyperlink-blue'>
                        <Link to='/design'>design tools</Link>
                      </span>{' '}
                      and project overview pages for designs in progress
                    </h2>
                  </article>
                </div>
              </section>
            </section>
            {/* Form */}
            <section className='grid lg:my-auto px-4 w-full'>
              <LoginForm setUser={setUser} />
            </section>
          </section>
        )}
      </div>
    </>
  );
}

export default Login;
