import React, { PropTypes } from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'

const ChatMessageList = ({ chatMessages }) => (
  <ul>
    {chatMessages.map(message => 
      <ChatMessage
        key={message.id}
        {...message}
      />
    )}
  </ul>
)

ChatMessageList.propTypes = {
  chatMessages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ChatMessageList