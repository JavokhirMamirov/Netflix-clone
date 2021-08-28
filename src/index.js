import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './app';
import {GlobalStayles} from './global-stayles';

ReactDOM.render(
  <>
    <GlobalStayles />
    <App />
  </>,
  document.getElementById('root')
);
