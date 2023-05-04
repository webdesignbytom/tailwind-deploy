import React from 'react';
import { Switch } from '@headlessui/react';
import { Link } from 'react-router-dom';

function ContactFormComponent({
  handleSubmitContactForm,
  handleChange,
  agreed,
  setAgreed,
  classNames,
}) {
  return (
    <form
      action='#'
      onSubmit={handleSubmitContactForm}
      className='mx-auto mt-16 max-w-xl sm:mt-12'
    >
      <section className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
        <div>
          <label
            htmlFor='firstName'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            First name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='firstName'
              id='firstName'
              onChange={handleChange}
              autoComplete='given-name'
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-colour sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div>
          <label
            htmlFor='lastName'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            Last name
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='lastName'
              id='lastName'
              onChange={handleChange}
              autoComplete='family-name'
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-colour sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='sm:col-span-2 -mt-4'>
          <label
            htmlFor='company'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            Company
          </label>
          <div className='mt-1'>
            <input
              type='text'
              name='company'
              id='company'
              onChange={handleChange}
              autoComplete='organization'
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-colour sm:text-sm sm:leading-6'
            />
          </div>
        </div>
        <div className='sm:col-span-2 -mt-4'>
          <label
            htmlFor='email'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            Email
          </label>
          <div className='mt-1'>
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
              autoComplete='email'
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-colour sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='sm:col-span-2 -mt-4'>
          <label
            htmlFor='message'
            className='block text-sm font-semibold leading-6 text-gray-900'
          >
            Message
          </label>
          <div className='mt-1'>
            <textarea
              name='message'
              id='message'
              onChange={handleChange}
              rows={4}
              className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-colour sm:text-sm sm:leading-6'
              defaultValue={''}
            />
          </div>
        </div>
        <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
          <div className='flex h-6 items-center'>
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={classNames(
                agreed ? 'bg-main-colour' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-colour'
              )}
            >
              <span className='sr-only'>Agree to policies</span>
              <span
                aria-hidden='true'
                className={classNames(
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          <Switch.Label className='text-sm leading-6 text-gray-600'>
            By selecting this, you agree to our{' '}
            <Link
              to='/terms-and-conditions'
              className='font-semibold text-main-colour'
            >
              <span>privacy&nbsp;policy</span>
            </Link>
            .
          </Switch.Label>
        </Switch.Group>
      </section>
      <section className='mt-6'>
        <button
          type='submit'
          className='inline-block px-7 py-3 w-full bg-main-colour text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-dark hover:shadow-lg focus:bg-colour-dark focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
        >
          Let's talk
        </button>
      </section>
    </form>
  );
}

export default ContactFormComponent;
