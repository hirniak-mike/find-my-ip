import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MainRouter from './Router/MainRouter';
import store from './Store/store';

import './Res/Styles/reset_style.scss';
import './Res/Styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
