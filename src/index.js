import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProviders } from './theme/theme-providers'

ReactDOM.render(
  <ThemeProviders>
    <App />
  </ThemeProviders>
  ,
  document.getElementById('root')
);
