import React from 'react'
import $ from 'jquery'
import ChatContainer from '../ChatContainer/ChatContainer'

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
      <div>
        <ChatContainer {...this.props} />
      </div>
    )
  }
})