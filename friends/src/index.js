import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } 
from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import rootReducer from './reducer'

// let store = createStore(rootReducer, applyMiddleware(thunk, logger))

let store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, logger),
  ));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));


