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

function EcoCityMainGameCanvas() {
  const {
    ecoCityGamePlayer,
    setEcoCityGamePlayer,
    mouseBuildingRef,
  } = useContext(EcoCityGameContext);

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

  // Don't allow clicking on two tiles
  let isProcessingClick = false;

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

    // Create tiles
    createNewGameTileGrid(
      originX,
      originY,
      maxGridXLength,
      maxGridYLength,
      tileColumnOffset,
      tileRowOffset,
      tilesRef,
    );

    // if (player.playerId) {
    //   drawTilesOwnedByPlayer();
    //   drawBuildingsOwnedByPlayer(player, tilesRef, buildingsRef);
    // }

    // Draw game on canvas
    drawCanvasElements();
  }, []);

  // const drawTilesOwnedByPlayer = () => {
  //   let tileOwnedArray = player.tileData.tilesArray;

  //   let newTileRef = tilesRef.current;

  //   tileOwnedArray.forEach((tile) => {
  //     // Find tiles that match owned tile id
  //     let foundTile = newTileRef.find((e) => e.id === tile.tileIdNum);
  //     if (foundTile) {
  //       foundTile.isOwned = true;
  //       foundTile.fillColour = ownedTileColourHex;
  //     }
  //   });
  // };

  // Main draw loop
  const drawCanvasElements = () => {
    // Draw tiles first
    drawTileGrid(contextRef, tilesRef);
  };

  const hoverMouseFunctions = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;

    clearCanvas(canvasRef);
    drawCanvasElements();
    // Check for building to place
    const mouseBuildingAvailable = mouseBuildingRef.current;
    // Tiles
    const tiles = tilesRef.current;

    // Draw building under mouse position
    if (mouseBuildingAvailable) {
      mouseBuildingAvailable.update(context, offsetX, offsetY - 10);
    }

    // Initially, assume no tiles are hovered over
    tiles.forEach((tile) => {
      tile.isHovered = false;
    });

    // Check for hovered tiles
    const hoveredTile = tiles.find((tile) => {
      // Convert mouse coordinates to isometric coordinates
      const isoX = (offsetX - tile.offX) / tile.tileColumnOffset;
      const isoY = (offsetY - tile.offY) / tile.tileRowOffset;

      // Check if the mouse is within the bounds of the tile
      return (
        isoX >= 0 && isoY >= 0 && isoX <= 1 && isoY <= 1 && isoX + isoY <= 1
      );
    });

    if (hoveredTile) {
      hoveredTile.isHovered = true;
    }
  };

  const mouseClickFunctions = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    // Ignore additional click events while processing one
    if (isProcessingClick) {
      return;
    }

    // Contexts
    const context = contextRef.current;
    const mouseBuildingAvailable = mouseBuildingRef.current;
    const tiles = tilesRef.current;

    // Set active tile
    tiles.forEach((tile) => {
      tile.isActive = false;
    });
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={hoverMouseFunctions}
      onMouseDown={mouseClickFunctions}
      className='cursor-pointer'
    />
  );
}

export default EcoCityMainGameCanvas;
