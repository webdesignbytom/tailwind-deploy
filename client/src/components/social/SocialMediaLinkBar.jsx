import React from 'react';
// Icons
import { FaFacebook } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaThreads } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa6';

function SocialMediaLinkBar() {
  return (
    <section className='grid items-center'>
      <div className='grid grid-cols-4 gap-x-2 w-fit h-fit bg-[#00000050] px-4 py-2 rounded-lg'>
        <FaFacebook
          size={30}
          className='text-[#0165E1] hover:brightness-95 active:scale-95 cursor-pointer'
          title='Facebook link'
        />
        <IoLogoInstagram
          size={30}
          className='text-[#C13584] hover:brightness-95 active:scale-95 cursor-pointer'
          title='Instgram link'
        />
        <FaThreads
          size={30}
          className='text-[#FCAF45] hover:brightness-95 active:scale-95 cursor-pointer'
          title='Threads link'
        />
        <FaYoutube
          size={30}
          className='text-[#FF0000] hover:brightness-95 active:scale-95 cursor-pointer'
          title='Youtube link'
        />
      </div>
    </section>
  );
}

export default SocialMediaLinkBar;
