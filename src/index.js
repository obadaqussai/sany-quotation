import React from 'react';
import ReactDOM from 'react-dom';
import QuotationApp from './components/QuotationApp';
import './styles/appStyles.js';

ReactDOM.render(
  <React.StrictMode>
    <QuotationApp />
  </React.StrictMode>,
  document.getElementById('root')
);