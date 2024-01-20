import React, { useState } from 'react';
// Components
import ContactFormComponent from '../forms/ContactFormComponent';

function ContactPageContent() {
  const [agreed, setAgreed] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    message: '',
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const handleSubmitContactForm = (event) => {
    console.log('x');
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };
  return (
    <main className='grid'>
      <div className='bg-white px-6 py-24 sm:py-32 lg:py-8 lg:px-20'>
        <section>
          <div
            className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
            aria-hidden='true'
          >
            <div
              className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl text-main-colour'>
              Contact Our Team
            </h2>
            <p className='mt-4 text-lg leading-5 text-gray-800'>
              Send us a messgae directly throught the form below. Or select from
              some of our email options for departments.
            </p>
            <p className='lg:hidden text-colour-dark font-semibold pt-1'>
              <a href='mailto:info@myecoapp.org'>Email Us By Clicking Here</a>
            </p>
          </div>
        </section>

        {/* sides */}
        <section className='grid lg:grid-cols-2'>
          {/* LEFT */}
          <section>
            <ContactFormComponent
              handleSubmitContactForm={handleSubmitContactForm}
              handleChange={handleChange}
              agreed={agreed}
              setAgreed={setAgreed}
              classNames={classNames}
            />
          </section>
          {/* RIGHT */}
          <section className='hidden lg:grid w-full p-10'>
            <section className='mx-auto mt-16 max-w-xl sm:mt-12 bg-main-colour shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] grid w-full py-20 px-32'>
              <article className='bg-gray-50 shadow-[rgba(0,_0,_0,_0.5)_0px_30px_90px] text-center grid items-center'>
                <h3>
                  <span>Email: </span>
                  <a href='mailto:hello@myecoapp.org'>
                    <span>hello@myecoapp.org</span>
                  </a>
                </h3>
              </article>
            </section>
          </section>
        </section>
      </div>
    </main>
  );
}

export default ContactPageContent;
