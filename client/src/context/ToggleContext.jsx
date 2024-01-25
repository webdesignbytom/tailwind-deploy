import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  const [isLevelUpContainerOpen, setIsLevelUpContainerOpen] = useState(false);
  const [isXpGainedContainerOpen, setIsXpGainedContainerOpen] = useState(false);
  const [isbadgesContainerOpen, setIsbadgesContainerOpen] = useState(true);

  // Popup menus
  // Level up menu
  const closeLevelUpMenu = () => {
    setIsLevelUpContainerOpen(false);
  };
  const openLevelUpMenu = () => {
    setIsLevelUpContainerOpen(true);
  };
  // Xp up display
  const closeXpMenu = () => {
    setIsXpGainedContainerOpen(false);
  };
  const openXpMenu = () => {
    setIsXpGainedContainerOpen(true);
  };
  // Badges earned
  const closeBadgeEarnedDisplay = () => {
    setIsbadgesContainerOpen(false);
  };
  const openBadgeEarnedDisplay = () => {
    setIsbadgesContainerOpen(true);
  };

  // Navbar
  const toggleNavbar = () => {
    setIsNavbarMenuOpen(!isNavbarMenuOpen);
  };

  return (
    <ToggleContext.Provider
      value={{
        isNavbarMenuOpen,
        toggleNavbar,
        // Level up menu
        isLevelUpContainerOpen,
        closeLevelUpMenu,
        openLevelUpMenu,
        // xp
        isXpGainedContainerOpen,
        closeXpMenu,
        openXpMenu,
        // Badges
        isbadgesContainerOpen,
        setIsbadgesContainerOpen,
        closeBadgeEarnedDisplay,
        openBadgeEarnedDisplay,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
