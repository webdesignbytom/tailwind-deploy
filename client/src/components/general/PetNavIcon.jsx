import React, { useState } from 'react';
// Images
import PetIcon from '../../assets/images/icons/pet_icon.svg';
// Functions
import { navigateToPetigotchiGamePage } from '../../utils/NavFunctions';
import { useNavigate } from 'react-router-dom';

function PetNavIcon() {
  const [petIconColour, setPetIconColour] = useState(false);
  let navigate = useNavigate();

  return (
    <section className='grid h-full w-full items-center justify-center'>
      <div
        onMouseOver={() => setPetIconColour(true)}
        onMouseLeave={() => setPetIconColour(false)}
        onClick={() => navigateToPetigotchiGamePage(navigate)}
        className='grid w-2/3 cursor-pointer'
        title='Pet updates'
      >
        {/* <img src={PetIcon} alt='Pet icon' className='object-cover' /> */}
        <svg
          version='1.0'
          xmlns='http://www.w3.org/2000/svg'
          width='50.000000pt'
          height='50.000000pt'
          viewBox='0 0 50.000000 50.000000'
          preserveAspectRatio='xMidYMid meet'
        >
          <metadata>
            Created by potrace 1.10, written by Peter Selinger 2001-2011
          </metadata>
          <g
            transform='translate(0.000000,50.000000) scale(0.100000,-0.100000)'
            fill={petIconColour ? '#fff' : '#000'}
            stroke='none'
          >
            <path
              d='M136 449 c-20 -16 -26 -29 -26 -60 0 -55 24 -99 54 -99 33 0 48 23
                53 78 4 38 1 53 -17 75 -26 32 -30 33 -64 6z m35 -86 c-9 -17 -10 -17 -16 0
                -4 9 -4 25 0 35 6 16 7 16 16 0 7 -12 7 -24 0 -35z'
            />
            <path
              d='M300 450 c-21 -21 -23 -33 -20 -85 4 -76 64 -101 100 -42 53 87 -14
                193 -80 127z m55 -50 c7 -23 -12 -63 -26 -55 -10 7 -12 58 -2 68 11 12 21 8
                28 -13z'
            />
            <path
              d='M421 285 c-33 -29 -56 -84 -46 -115 3 -11 18 -23 32 -26 40 -11 83
                42 83 101 0 61 -26 76 -69 40z m29 -66 c-10 -17 -30 -27 -30 -13 0 15 22 44
                31 39 5 -4 5 -13 -1 -26z'
            />
            <path
              d='M26 278 c-23 -32 -21 -101 4 -123 39 -36 90 5 90 73 0 63 -62 96 -94
                50z m54 -52 c0 -8 -6 -19 -14 -25 -18 -15 -31 15 -15 35 13 16 29 10 29 -10z'
            />
            <path
              d='M158 150 c-38 -39 -68 -76 -68 -83 0 -27 27 -50 56 -48 16 1 79 3
                139 4 61 1 116 6 123 10 6 5 12 19 12 32 0 19 -10 30 -39 45 -22 11 -54 40
                -71 65 -46 66 -68 62 -152 -25z m152 -32 c27 -28 50 -52 50 -52 0 -1 -47 -1
                -105 -2 -65 0 -105 4 -105 10 0 15 82 96 97 96 7 0 35 -23 63 -52z'
            />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default PetNavIcon;
