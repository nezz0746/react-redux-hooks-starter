import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {configureStore} from 'redux-starter-kit';

import homePageReducer from './pages/HomePage/homePage';

const store = configureStore({
    reducer : {
        Home : homePageReducer
    }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
