import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import ChatMessageBox from '../ChatMessageBox/ChatMessageBox'
import ChatInputBox from '../ChatInputBox/ChatInputBox'
import chatEvents from '../../actions/chat'
import $ from 'jquery'
import { scrollbar } from 'jquery.scrollbar'

const ChatContainer = React.createClass({
  
  getSocket() {
    let socket = io.connect('http://localhost:3000')
    return chatEvents(this.props, socket)()
  },

  componentDidMount() {
    this.getSocket().getMessages()
    $('.scrollbar-macosx').scrollbar();
  },

  render() { 
    return (
      <div>
        <ChatMessageBox />
        <ChatInputBox chatEvents={this.getSocket()} />
      </div>
    )
  }

})

export default connect()(ChatContainer)