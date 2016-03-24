import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Root from './Root'

let store = createStore(rootReducer)

// render(
//   <HomePage />,
//   document.getElementById('root')
// );

render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
)