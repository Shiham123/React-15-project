import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvide } from './context';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvide>
      <App />
    </AppProvide>
  </React.StrictMode>
);
