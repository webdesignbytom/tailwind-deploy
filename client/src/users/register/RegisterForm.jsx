import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Icons
import OpenEye from '../../assets/svg/eye.svg';
// Utils
import {
  showConfirmPassword,
  showPassword,
} from '../../users/utils/PasswordReveal';
import { registerDataTemplate } from '../utils/Utils';
import CountrySelect from '../utils/CountrySelect';
// Validation
import { validPassword } from '../../users/utils/Validation';
import { SubmitButton } from '../../components/utils/Utils';

function RegisterForm() {
  const [fieldType, setFieldType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(OpenEye);
  const [fieldTypeConfirm, setFieldTypeConfirm] = useState('password');
  const [eyeIconConfirm, setEyeIconConfirm] = useState(OpenEye);
  const [registerForm, setRegisterForm] = useState(registerDataTemplate);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  // Email and password
  const [hiddenPass, setHiddenPass] = useState('invisible h-4');
  const [hiddenEmail, setHiddenEmail] = useState('invisible h-4');
  // Input colour
  const [inputStyle, setInputStyle] = useState('standard__inputs');

  let navigate = useNavigate();

  useEffect(() => {
    if (registerForm.password === registerForm.confirmPassword) {
      if (registerForm.password > 0) {
        setHiddenPass('block');
        setInputStyle('standard__inputs');
      }
    }
    if (
      registerForm.password !== registerForm.confirmPassword &&
      registerForm.confirmPassword > 3
    ) {
      setHiddenPass('block');
      setInputStyle('error__inputs');
    }
  }, [registerForm.password, registerForm.confirmPassword]);

  const navigateLogin = () => {
    navigate('../login', { replace: true });
  };

  const checkHandler = (event) => {
    setAgreedToTerms(!agreedToTerms);
    setRegisterForm({
      ...registerForm,
      agreedToTerms: !agreedToTerms,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (registerForm.password.length > 8) {
    } else {
    }

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      setHiddenPass('block');
      setInputStyle('error__inputs');
      return;
    }

    const checkPassword = validPassword(registerForm.password);

    if (checkPassword === false) {
      alert('Passwords too short');
      return;
    }

    if (agreedToTerms !== true) {
      alert('Please check to agree to terms and conditons');
      return;
    }

    const userData = registerForm;
  };

  return (
    <>
      <form
        onSubmit={handleRegister}
        className='pb-4 lg:w-full dark:bg-black lg:my-auto lg:px-8'
      >
        <section>
          <h2 className='text-xl py-2 dark:text-white'>Register here</h2>
        </section>

        {/* <!-- Email input --> */}
        <section>
          <div>
            <input
              type='text'
              name='email'
              className='standard__inputs'
              placeholder='Email address'
              onChange={handleChange}
            />
          </div>
        </section>

        {/* <!-- Password input --> */}
        <div>
          <div className='relative flex z-0'>
            <input
              type={fieldType}
              name='password'
              className={inputStyle}
              placeholder='Password'
              onChange={handleChange}
            />
            <label
              className='px-2 py-1 text-sm text-red-500 font-mono cursor-pointer absolute right-0'
              htmlFor='toggle'
            >
              <img
                onClick={() =>
                  showPassword(fieldType, setFieldType, setEyeIcon)
                }
                src={eyeIcon}
                className='h-6 w-6 my-2 mr-2'
                alt='open eye'
              />
            </label>
          </div>
        </div>

        {/* <!--Confirm Password input --> */}
        <section>
          <div className='relative flex z-0'>
            <input
              type={fieldTypeConfirm}
              name='confirmPassword'
              className={inputStyle}
              placeholder='Confirm Password'
              onChange={handleChange}
            />
            <label
              className='px-2 py-1 text-sm text-red-500 font-mono cursor-pointer absolute right-0'
              htmlFor='toggle'
            >
              <img
                onClick={() =>
                  showConfirmPassword(
                    fieldTypeConfirm,
                    setFieldTypeConfirm,
                    setEyeIconConfirm
                  )
                }
                src={eyeIconConfirm}
                className='h-6 w-6 my-2 mr-2'
                alt='open eye'
              />
            </label>
          </div>
        </section>

        {/* <!-- FirstName input --> */}
        <div className=''>
          <input
            type='text'
            name='firstName'
            className='standard__inputs'
            placeholder='First Name'
            onChange={handleChange}
          />
          <p className='h-4'></p>
        </div>

        {/* <!-- LastName input --> */}
        <div className=''>
          <input
            type='text'
            name='lastName'
            className='standard__inputs'
            placeholder='Last Name'
            onChange={handleChange}
          />
          <p className='h-4'></p>
        </div>

        {/* <!-- Country input --> */}
        <div className=''>
          <CountrySelect handleChange={handleChange} />
          <p className='h-4'></p>
        </div>

        <div className='form-group form-check ml-1'>
          <input
            type='checkbox'
            className='form-check-input h-4 w-4 border border-main-colour rounded-sm bg-white checked:bg-main-colour checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            id='agreedToTerms'
            checked={agreedToTerms}
            value={agreedToTerms}
            onChange={checkHandler}
          />
          <label
            className='form-check-label inline-block text-gray-800 dark:text-white'
            htmlFor='agreedToTerms'
          >
            I agree with the{' '}
            <Link
              to='/terms-and-conditions'
              className='text-hyperlink-blue dark:text-hyperlink-blue hover:underline'
            >
              terms and conditions
            </Link>
            .
          </label>
        </div>

        {/* <!-- Submit button --> */}

        <div className='mt-2'>
          <div className='mb-2'>
            <SubmitButton />
          </div>
        </div>

        <div className='text-center dark:text-white'>
          <Link to='/login'>
            <p>
              Already a member? Click{' '}
              <span className='text-hyperlink-blue'>here</span> to login
            </p>
          </Link>
          <p className='h-4'></p>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
