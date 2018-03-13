import React from 'react';
import ReactDOM from 'react-dom';
import 'grommet/grommet.min.css';
import './index.css';
import App from './App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
          <BrowserRouter>
          <App />
      </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
