import React from 'react'
import $ from 'jquery'
import ChatContainer from '../ChatContainer/ChatContainer'
import { Grid, Row, Col } from 'react-bootstrap';

require('./Room.scss');

export default React.createClass({

  setRoom() {
    $.post('http://localhost:3000/room/', {
      roomHash: this.props.params.roomHash,
      userId: 1
    }, 'json')
    .done(room => {
      console.log(room)
    })
    .fail(error => {
      console.log(error)
    })
  },

  componentDidMount() {
    this.setRoom()
  },

  render() {  
    return (
      <div className='background-room'>
        <Grid>
          <Row>
            <Col lg={8}>
              <div className='video-container'></div>
              <div className='playlist-container'></div>
              
            </Col>
            <Col lg={4}>
              <ChatContainer {...this.props} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
})