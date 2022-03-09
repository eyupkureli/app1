import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//we should import redux dependencies
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers';

//we create our store by using our reducer function as an argument
let store = createStore(rootReducer)

//we use our store as a wrap by the help of <Provider>

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

