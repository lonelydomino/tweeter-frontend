import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import rootReducer from './reducers';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createStore } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
let store = createStore(rootReducer, applyMiddleware(thunk))
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);
