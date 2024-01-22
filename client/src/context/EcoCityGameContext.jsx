import React from 'react';
import { useState } from 'react';

export const EcoCityGameContext = React.createContext();

const EcoCityGameContextProvider = ({ children }) => {
  const [ecoCityGamePlayer, setEcoCityGamePlayer] = useState({
    // Player data
    id: 'txl',
    playerName: 'Big Chedder',
    // Player Stats
    
  });

 
  return (
    <EcoCityGameContext.Provider
      value={{
        ecoCityGamePlayer, setEcoCityGamePlayer
      }}
    >
      {children}
    </EcoCityGameContext.Provider>
  );
};

export default EcoCityGameContextProvider;