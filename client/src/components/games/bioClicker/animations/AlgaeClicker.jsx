import React, { useContext } from 'react';
// Context
import { BioClickerGameContext } from '../../../../context/BioClickerGameContext';
// Image
import AlgaeIcon from '../images/logos/algae.png';

function AlgaeClicker() {
  const { bioClickerGamePlayer, setBioClickerGamePlayer } = useContext(BioClickerGameContext)

  const manageClickOnAlgae = () => {
    console.log('AAA');
    let currentScore = bioClickerGamePlayer.totalScore
    let amountToAdd = bioClickerGamePlayer.pointsPerClick

    let newScore = currentScore + amountToAdd

    setBioClickerGamePlayer({
      ...bioClickerGamePlayer,
      totalScore: newScore
    })

  }

  return (
    <div className='no__highlights absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <img onClick={manageClickOnAlgae} src={AlgaeIcon} alt='Algae game clicker button icon'  className='w-[150px] h-[150px] active:scale-95 cursor-pointer hover:brightness-110' />
    </div>
  );
}

export default AlgaeClicker;
