import React, { useEffect, useRef, useState } from 'react';
import { AlgaeObject } from '../objects/AlgaeObject';
import { createAnimationsOnScreen } from '../functions/BioClickerFunctions';

function GameAnimationsScreen() {
  // Canvas and animations
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  // Algae objects
  const algaeRef = useRef([]);

  const [gamePlayState, setGamePlayState] = useState({
    maxNumberOfAlgae: 30,
    algaeOnScreen: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas height
    const width = window.innerWidth;
    const height = window.innerHeight - 32;
    canvas.width = width;
    canvas.height = height;

    context.scale(1, 1);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    contextRef.current = context;

    createAnimationsOnScreen(
      gamePlayState,
      setGamePlayState,
      algaeRef,
      canvasRef
    );

    animate()
  }, []);


  const animate = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    const algaeArray = algaeRef.current;

    const animateFrame = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw each Algae object
      algaeArray.forEach((algae) => {
        algae.update(context, canvas);
      });

      requestAnimationFrame(animateFrame);
    };

    animateFrame();
  };

  const attackAlgae = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    algaeRef.current.forEach(function (algae) {
      const distanceSquared =
        Math.pow(offsetX - algae.xpos, 2) + Math.pow(offsetY - algae.ypos, 2);

      if (distanceSquared < Math.pow(algae.radius, 2)) {
        algae.clicked(algaeRef);
      }
    });
  };

  return (
    <canvas
      ref={canvasRef}
      className='grid absolute w-full h-full cursor-pointer'
      onMouseDown={attackAlgae}
    />
  );
}

export default GameAnimationsScreen;
