import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/components/redux/store';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles/base.css'



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <App />
          </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

