import React, { Component, PropTypes } from 'react'
import { addChatMessage } from '../../actions'
import $ from 'jquery'

require('./ChatInputBox.scss')

class ChatInputBox extends Component { 
  constructor() {
    super()
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleTyping = this.handleTyping.bind(this)
  } 

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.chatEvents.sendMessage(1, e.target.value)
      e.target.value = ''
      
    }
  }

  handleTyping() {
    this.props.chatEvents.userIsTyping(null)
  }

  render() {
    return (
      <div className='chat-input-box-container'>
        <input 
          type='text'
          onKeyUp={this.handleKeyUp}
          onChange={this.handleTyping}
          ref='chatText'
        />
      </div>
    )
  }
}

export default ChatInputBox