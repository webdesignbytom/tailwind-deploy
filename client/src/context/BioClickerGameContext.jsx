import React, { useEffect } from 'react';
import { useState } from 'react';
// Data
import { LevelsDB } from '../components/games/bioClicker/data/LevelsDB';
import { ItemsDB } from '../components/games/bioClicker/data/ItemsDB';
import { BuildingsDB } from '../components/games/bioClicker/data/BuildingsDB';

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

  const bioClickerBuySideMenuProduct = (product, purchaseAmount) => {
    console.log('purchaseAmount', (typeof purchaseAmount));
    // Check if it can be afforded
    const purchasePrice = Number(purchaseAmount) * product.cost;
    console.log('purchasePrice', purchasePrice);

    console.log('PLAYER XX', bioClickerGamePlayer.items);
    console.log('PLAYER XX', bioClickerGamePlayer.totalItemsOwned);

    if (bioClickerGamePlayer.totalScore >= purchasePrice) {
      // Find the product in players state and add to quantity
      let character = bioClickerGamePlayer;

      let newArray;

      if (product.productType === 'item') {
        newArray = character.items;
      }

      if (product.productType === 'building') {
        newArray = character.buildings;
      }

      let productIndex = newArray.findIndex((p) => p.id === product.id);

      if (productIndex !== -1) {
        let newQ = newArray[productIndex].quantity + Number(purchaseAmount);
        console.log('new q', newQ);
        console.log('newArray', newArray);
        newArray[productIndex].quantity = Number(newQ);
        //
        let newCost = newArray[productIndex].cost * increaseConstant;
        console.log('newcost', newCost);
        newArray[productIndex].cost = Number(newCost);
        //
      } else {
        //
        newArray.push({
          ...product,
          quantity: Number(purchaseAmount),
        });
      }

      if (product.productType === 'item') {
        setBioClickerGamePlayer({
          ...bioClickerGamePlayer,
          items: newArray,
        });
      }

      // // Increase product cost
      let purchaseCount = Number(purchaseAmount);

      let startingPrice = product.cost;
      let newTotalCost = startingPrice;
      console.log('starting price', startingPrice);
      console.log('newTotalCost1', newTotalCost);

      for (let i = 0; i < purchaseCount; i++) {
        newTotalCost *= increaseConstant;
      }
      console.log('newTotalCost2', newTotalCost);

      product.cost = newTotalCost.toFixed(2);

      // PPC Product
      if (product.type === 'pointsPerClick') {
        // Assign current values

        let currentPointsPerClick = bioClickerGamePlayer.pointsPerClick;
        let currentTotalScore = bioClickerGamePlayer.totalScore;

        let newPointsPerClickValue = currentPointsPerClick + (product.effect * purchaseCount);
        let newTotalScore = currentTotalScore - purchasePrice;

        let newQ = Number(purchaseAmount) + Number(product.quantityOwned)
        product.quantityOwned = Number(newQ);

        let newTotalBuildingsOwned = bioClickerGamePlayer.totalBuildingsOwned;
        let currentTotalItemsOwned = bioClickerGamePlayer.totalItemsOwned;
        console.log('newTotalItems', currentTotalItemsOwned);

        if (product.productType === 'item') {
          let newNum = currentTotalItemsOwned + Number(purchaseAmount);
          console.log('newnum', newNum);
          currentTotalItemsOwned = Number(newNum);
          console.log('currentTotalItemsOwned: ' + currentTotalItemsOwned);
        }

        if (product.productType === 'building') {
          let newNum = bioClickerGamePlayer.newTotalBuildingsOwned + purchaseAmount;
          newTotalBuildingsOwned = newNum;
        }

        let testNum = Number(currentTotalItemsOwned);

        setBioClickerGamePlayer({
          ...bioClickerGamePlayer,
          pointsPerClick: newPointsPerClickValue,
          totalScore: newTotalScore,
          totalItemsOwned: testNum,
          totalBuildingsOwned: newTotalBuildingsOwned,
        });
      }

      // PPS Item
      if (product.type === 'pointsPerSecond') {
        let currentPointsPerSecond = bioClickerGamePlayer.pointsPerSecond;
        let currentTotalScore = bioClickerGamePlayer.totalScore;

        let newPointsPerSecondValue = currentPointsPerSecond + (product.effect * purchaseCount);
        console.log('AA new', newPointsPerSecondValue);
        let newTotalScore = currentTotalScore - product.cost;

        let newQ = Number(purchaseAmount) + Number(product.quantityOwned)
        product.quantityOwned = Number(newQ);

        let newTotalBuildingsOwned = bioClickerGamePlayer.totalBuildingsOwned;
        let currentTotalItemsOwned = bioClickerGamePlayer.totalItemsOwned;

        if (product.productType === 'item') {
          const newNum = bioClickerGamePlayer.totalItemsOwned + purchaseAmount;
          currentTotalItemsOwned = newNum;
        }

        if (product.productType === 'building') {
          const newNum =
            bioClickerGamePlayer.newTotalBuildingsOwned + purchaseAmount;
          newTotalBuildingsOwned = newNum;
        }

        setBioClickerGamePlayer({
          ...bioClickerGamePlayer,
          pointsPerSecond: newPointsPerSecondValue,
          totalScore: newTotalScore,
          totalItemsOwned: currentTotalItemsOwned,
          totalBuildingsOwned: newTotalBuildingsOwned,
        });
      }

    } else {
      alert('You cannot afford to purchase');
      return;
    }
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
        // Purchase
        bioClickerBuySideMenuProduct
      }}
    >
      {children}
    </BioClickerGameContext.Provider>
  );
};

export default BioClickerGameContextProvider;
