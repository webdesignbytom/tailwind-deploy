import React from 'react';
// Image
import AlgaeIcon from '../../../../assets/images/bioClicker/logos/algae.png';

function AlgaeClicker() {

  const manageClickOnAlgae = () => {
    console.log('AAA');
  }

  return (
    <div className='no__highlights absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <img onClick={manageClickOnAlgae} src={AlgaeIcon} alt='Algae game clicker button icon'  className='w-[150px] h-[150px] active:scale-95 cursor-pointer hover:brightness-110' />
    </div>
  );
}

export default AlgaeClicker;
