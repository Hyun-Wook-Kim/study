import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './module';

// import loggerMiddleware from './lib/loggerMiddleware';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk'


const logger = createLogger();
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

