import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './containers/App/App'
import Home from './containers/Home/Home'
import Room from './containers/Room/Room'

const Root = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/room/:roomHash' component={Room} />
    </Route>
  </Router>
)

export default Root