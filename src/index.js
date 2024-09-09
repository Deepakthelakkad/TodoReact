import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');  // Target the 'root' element
const root = ReactDOM.createRoot(rootElement);  // Create a root for React to render into

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
