import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleLevelUpContainer, setToggleLevelUpContainer] = useState(false);

  // Popup menus
  // Level up menu
  const closeLevelUpMenu = () => {
    setToggleLevelUpContainer(false);
  };
  const openLevelUpMenu = () => {
    setToggleLevelUpContainer(true);
  };

  // Navbar
  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        toggleNavbar,
        // Level up menu
        toggleLevelUpContainer,
        closeLevelUpMenu,
        openLevelUpMenu,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
