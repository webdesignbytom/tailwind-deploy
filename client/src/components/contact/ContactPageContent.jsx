import React, { useState } from 'react';
// Components
import ContactFormComponent from '../forms/ContactFormComponent';
import SocialMediaLinkBarLarge from '../social/SocialMediaLinkBarLarge';

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
          ></div>
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
          <section className='hidden lg:grid w-full p-10 mt-20'>
            <section className='mx-auto p-4 bg-main-colour shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] grid w-full '>
              <article className='bg-gray-50 shadow-[rgba(0,_0,_0,_0.5)_0px_30px_90px] h-full text-center grid items-center'>
                <div>
                  <span>Email: </span>
                  <a href='mailto:hello@myecoapp.org'>
                    <span>hello@myecoapp.org</span>
                  </a>
                </div>
                <div>
                  <span>Email: </span>
                  <a href='mailto:hello@myecoapp.org'>
                    <span>info@myecoapp.org</span>
                  </a>
                </div>
              </article>
            </section>

            {/* Social media cta */}
            <div className='grid grid-rows-reg pt-10'>
              <div className='grid  w-full justify-center py-4'>
                <p>Contact or Follow us across all our social media</p>
              </div>
              <div className='grid justify-center h-full items-start'>
                <div className='-mb-20'>
                  <SocialMediaLinkBarLarge />
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default ContactPageContent;
