import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import FullScreenVideo from '../../components/FullScreenVideo/FullScreenVideo'

require('./Home.scss');

export default React.createClass({
  
  randString(x) {
    let s = '';
    while (s.length<x&&x>0) {
      let r = Math.random()
      s += (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)))
    }
    return s
  },

  render() {
    return (
      <div>
        <Link to={`/room/${this.randString(10)}`}>Join a room!</Link>
      </div>
    )
  }
})
