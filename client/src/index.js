import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Context
import ToggleContextProvider from './context/ToggleContext';
import UserContextProvider from './context/UserContext';
import BioClickerGameContextProvider from './context/BioClickerGameContext';
import EcoCityGameContextProvider from './context/EcoCityGameContext';
// Styles
import './styles/index.css';
import './styles/components.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ToggleContextProvider>
      <UserContextProvider>
        <BioClickerGameContextProvider>
          <EcoCityGameContextProvider>
            <App />
          </EcoCityGameContextProvider>
        </BioClickerGameContextProvider>
      </UserContextProvider>
    </ToggleContextProvider>
  </BrowserRouter>
);
