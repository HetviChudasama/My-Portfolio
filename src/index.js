import React from 'react';
import ReactDOM from 'react-dom';  // For React 17 or lower
import App from './App';
import { Themeprovider } from './context';

ReactDOM.render(
  <Themeprovider>
    <App />
  </Themeprovider>,
  document.getElementById('root')
);
