import React from 'react';
// Data
import { GoalsList } from '../../utils/data/CompanyData';
// Icons
import { MdSolarPower } from 'react-icons/md';
import { Link } from 'react-router-dom';

function GoalArticles() {
  return (
    <section className='flex flex-wrap mb-12'>
      <div className='grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0'>
        <div
          className='relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg'
          style={{ backgroundPosition: '50%' }}
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
        >
          <img
            src='https://mdbootstrap.com/images/new/standard/city/028.jpg'
            className='w-full'
            alt='Louvre'
          />
          <a href='#!'>
            <div
              className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
              style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
            ></div>
          </a>
        </div>
      </div>

      <article className='grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6'>
        <h3 className='text-2xl font-bold mb-4'>{GoalsList[0].title}</h3>
        <div className='text-colour-dark text-sm mb-4 flex items-center font-medium'>
          <MdSolarPower size={25} className='mr-4' />
          <h4>Travels</h4>
        </div>
        <p className='text-gray-500 mb-6'>{GoalsList[0].content}</p>

        <div>
          <Link to='/'>
            <button className='outline-main-colour outline outline-2 font-medium px-4 py-2 rounded-lg my-4 hover:bg-colour-dark hover:text-gray-100'>
              Find Out More
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default GoalArticles;
