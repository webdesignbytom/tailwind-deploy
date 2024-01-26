import { AlgaeObject } from '../objects/AlgaeObject'

export const createAnimationsOnScreen = (
    gamePlayState,
    setGamePlayState,
  algaeRef,
  canvasRef
) => {
  let arrayNum = gamePlayState.algaeOnScreen;
  let tempStore = algaeRef.current;

  for (let i = 0; i < gamePlayState.maxNumberOfAlgae; i++) {
    let random_x = Math.random() * canvasRef.current.width;
    let random_y = Math.random() * canvasRef.current.height;
    let animation = new AlgaeObject(
      i,
      random_x,
      random_y,
      20,
      'green',
      arrayNum,
      1 // speed
    );
    arrayNum++;
    tempStore.push(animation);
  }
  setGamePlayState({
    ...gamePlayState,
    algaeOnScreen: arrayNum
  });
  
  algaeRef.current = tempStore;
};
