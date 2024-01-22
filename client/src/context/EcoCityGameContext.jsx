import React, { useRef } from 'react';
import { useState } from 'react';
// Images
import PlayerImg from '../components/games/ecoCity/images/player/user.png';

export const EcoCityGameContext = React.createContext();

const EcoCityGameContextProvider = ({ children }) => {
  // References
  const mouseItemRef = useRef(null);
  const mouseBuildingRef = useRef(null);
  const buildingIDNumberRef = useRef(1);

  const [ecoCityGamePlayer, setEcoCityGamePlayer] = useState({
    // Player data
    id: 'txl',
    email: 'tom@tom.com',
    playerName: 'Big Chedder',
    // Player Stats
    playerLevel: 1,
    playerImage: PlayerImg,
    title: 'Lord',
    currentXp: 0,
    totalXp: 0,
    cityData: {
      cityName: 'Rascleville',
      cityHealth: 1000,
      cityDefense: 10,
    },
    currencyData: {
      gold: 1000,
      gems: 500,
    },
    battleData: {
      strength: 10,
      defense: 10,
      health: 100,
      speed: 10,
      accuracy: 10,
    },
    tileData: { tilesOwned: 0, tilesArray: [] },
    buildingsData: {
      buildingsOwned: 0,
      buildingsArray: [],
    },
  });

  return (
    <EcoCityGameContext.Provider
      value={{
        ecoCityGamePlayer,
        setEcoCityGamePlayer,
        mouseItemRef,
        mouseBuildingRef,
        buildingIDNumberRef,
      }}
    >
      {children}
    </EcoCityGameContext.Provider>
  );
};

export default EcoCityGameContextProvider;
