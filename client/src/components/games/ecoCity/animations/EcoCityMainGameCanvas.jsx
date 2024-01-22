import React, { useContext, useEffect, useRef } from 'react';
// Context
import { EcoCityGameContext } from '../../../../context/EcoCityGameContext';
// Functions
import {
  clearCanvas,
  createNewGameTileGrid,
  drawTileGrid,
} from '../functions/EcoCityGameFunctions';
// Images
import Gold from '../images/currency/goldCoin.png';
import { Tile } from '../objects/Tile';
import { ownedTileColourHex, unownedTileColourHex } from '../data/Constants';

function EcoCityMainGameCanvas() {
  const { ecoCityGamePlayer, setEcoCityGamePlayer, mouseBuildingRef } =
    useContext(EcoCityGameContext);

  // Canvas and animations
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const tilesRef = useRef([]);
  const goldCoinRef = useRef(null);

  // Grid sizes
  const maxGridXLength = 20;
  const maxGridYLength = 20;

  // Isometric offset
  const tileColumnOffset = 64; // pixels
  const tileRowOffset = 32; // pixels

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas height
    const width = window.innerWidth;
    const height = window.innerHeight - 32;
    canvas.width = width;
    canvas.height = height;

    // Set tiles to build from center
    const originX = width / 2 - (maxGridXLength * tileColumnOffset) / 2;
    const originY = height / 2;

    context.scale(1, 1);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    contextRef.current = context;

    // Create images needed for game
    const goldCoin = new Image();
    goldCoin.src = Gold;
    goldCoinRef.current = goldCoin;

    createNewGameTileGrid(
      originX,
      originY,
      maxGridXLength,
      maxGridYLength,
      tileColumnOffset,
      tileRowOffset,
      tilesRef
    );
    // Draw game on canvas
    drawCanvasElements();
  }, []);

  // Main draw loop
  const drawCanvasElements = () => {
    // Draw tiles first
    drawTileGrid(contextRef, tilesRef);
  };

  const createNewGameTileGrid = (
    originX,
    originY,
    maxGridXLength,
    maxGridYLength,
    tileColumnOffset,
    tileRowOffset,
    tilesRef
  ) => {
    // Create preowned tiles array
    const numRows = 20;
    const numCols = 15;
    const centerSize = 5;

    const TileGrid = [];

    for (let row = 1; row <= numRows; row++) {
      for (let col = 1; col <= numCols; col++) {
        const isStarterTile =
          row >= (numRows - centerSize) / 2 &&
          row <= (numRows + centerSize) / 2 &&
          col >= (numCols - centerSize) / 2 &&
          col <= (numCols + centerSize) / 2;

        TileGrid.push([row, col, isStarterTile]);
      }
    }

    console.log('TileGrid: ', TileGrid);
    let id = 1;
    // Array of createdTiles
    let createdTilesArray = [];
    console.log('createdTilesArray', createdTilesArray);

    for (let Xi = maxGridXLength - 1; Xi >= 0; Xi--) {
      for (let Yi = 0; Yi < maxGridYLength; Yi++) {
        const offX =
          (Xi * tileColumnOffset) / 2 + (Yi * tileColumnOffset) / 2 + originX;
        const offY =
          (Yi * tileRowOffset) / 2 - (Xi * tileRowOffset) / 2 + originY;

        // Create tile and give it cooridinates
        const tile = new Tile(id, offX, offY, unownedTileColourHex, 'black');
        createdTilesArray.push(tile);

        // Update id
        id++;
      }
    }

    tilesRef.current = createdTilesArray;
  };

  return (
    <canvas ref={canvasRef} className='cursor-pointer bg-red-500 h-full' />
  );
}

export default EcoCityMainGameCanvas;
