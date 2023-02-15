import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ToggleContextProvider from './context/ToggleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleContextProvider>
        <App />
      </ToggleContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
