import React, { useEffect } from 'react';
import { useState } from 'react';
// Data
import { LevelsDB } from '../data/bioClicker/LevelsDB';
import { ItemsDB } from '../data/bioClicker/ItemsDB';
import { BuildingsDB } from '../data/bioClicker/BuildingsDB';

export const BioClickerGameContext = React.createContext();

const BioClickerGameContextProvider = ({ children }) => {
  // Player Data
  const [bioClickerGamePlayer, setBioClickerGamePlayer] = useState({
    // Basic Profile Data
    username: 'The Great Humongo',

    // Points
    basePointsPerSecond: 1,
    // Actual displayed points
    pointsPerSecond: 1,
    pointsPerClick: 1,
    totalTimesClicked: 0,
    totalScore: 0,
    timer: false,

    // Items
    totalItemsOwned: 0,
    items: [],

    // Buildings
    totalBuildingsOwned: 0,
    buildings: [],

    // Level
    currentLevel: 1,
    percentageCompleted: 0,

    // Gems and paid items
    gems: 50,
  });

  const [increaseConstant] = useState(1.1);
  const [currentLevel, setCurrentLevel] = useState({});

  useEffect(() => {
    const currentLevel = bioClickerGamePlayer.currentLevel;
    const levelIndex = currentLevel - 1;
    setCurrentLevel(LevelsDB.content[levelIndex]);
  }, [bioClickerGamePlayer.currentLevel]);

  const resetPlayerStats = () => {
    let newLevel = bioClickerGamePlayer.currentLevel + 1;

    ItemsDB.content.forEach((item) => {
      item.quantityOwned = 0;
    });

    BuildingsDB.content.forEach((buildings) => {
      buildings.quantityOwned = 0;
    });

    setBioClickerGamePlayer({
      ...bioClickerGamePlayer,
      pointsPerSecond: 0,
      pointsPerClick: 1,
      totalScore: 0,
      totalItemsOwned: 0,
      items: [], // db model
      totalBuildingsOwned: 0,
      buildings: [], // db model
      currentLevel: newLevel,
    });
  };

  const savePlayerCompleteState = () => {
    let playerData = bioClickerGamePlayer;
    let newArray = bioClickerGamePlayer.playerLevelCompletedData;

    newArray.push(playerData);

    setBioClickerGamePlayer({
      ...bioClickerGamePlayer,
      playerLevelCompletedData: newArray,
    });
  };

  const [mainDisplayToggle, setMainDisplayToggle] = useState(false);

  const toggleMainView = () => {
    console.log('toggleNavbar');
    setMainDisplayToggle(!mainDisplayToggle);
  };

  return (
    <BioClickerGameContext.Provider
      value={{
        // Functions
        resetPlayerStats,
        savePlayerCompleteState,
        // State
        bioClickerGamePlayer,
        increaseConstant,
        currentLevel,
        setBioClickerGamePlayer,
        toggleMainView,
        mainDisplayToggle,
        setMainDisplayToggle,
      }}
    >
      {children}
    </BioClickerGameContext.Provider>
  );
};

export default BioClickerGameContextProvider;
