
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import Root from './Root'

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
)