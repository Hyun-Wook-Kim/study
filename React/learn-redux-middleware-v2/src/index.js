import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';


const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(logger, ReduxThunk, sagaMiddleware)
));
sagaMiddleware.run(rootSaga)

root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
