import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ResetStyle from './globalStyles/ResetStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <App />
  </React.StrictMode>
);
