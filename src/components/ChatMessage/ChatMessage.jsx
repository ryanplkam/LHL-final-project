import React, { PropTypes } from 'react'

const ChatMessage = ({ user, text }) => (
  <li>
    {user}{': '}{text}
  </li>
)

ChatMessage.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default ChatMessage