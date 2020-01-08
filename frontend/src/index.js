import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// BrowserRouter is a component
import {BrowserRouter as Router} from 'react-router-dom';


// IMPORTING REDUX STUFF //

// Provider is a component
import { Provider } from 'react-redux';
// createStore is a function
// applyMiddleware is a function for thunk
// compose is for redux-devtools
// combineReducers combine reducers
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// thunk
import thunk from 'redux-thunk';

// SETUP REDUX MATERIAL HERE
import goatReducer from './redux/goatReducer';
import cakeReducer from './redux/cakeReducer';


const rootReducer = combineReducers({
  allInformationAboutGoats: goatReducer,
  allInformationAboutCakes: cakeReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let storeObj = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={storeObj}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('root'));




















//
