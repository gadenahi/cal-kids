import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/js/App';
import * as serviceWorker from './serviceWorker';
import { GlobalProvider } from './components/js/Global';


ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();