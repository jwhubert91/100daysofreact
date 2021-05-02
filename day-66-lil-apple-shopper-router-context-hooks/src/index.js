import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import {CartContextProvider} from './cartContext'

ReactDOM.render(
  <CartContextProvider>
    <Router>
      <App />
    </Router>
  </CartContextProvider>,
  document.getElementById('root')
);
