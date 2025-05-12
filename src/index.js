import React from 'react';
import ReactDOM from 'react-dom';
import QuotationApp from './components/QuotationApp';
import './styles/appStyles.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <QuotationApp />
  </React.StrictMode>,
  document.getElementById('root')
);