import React, { PropTypes } from 'react'
import ChatMessage from '../ChatMessage/ChatMessage'

require('./ChatMessageList.scss')

const ChatMessageList = ({ chatMessages }) => (
  <div className='chat-message-list-container scrollbar-macosx'>
    <ul>
      <li>YO OOOOOO</li>
      <li>YO OOOOOOYO OOOOOYO OOOOOYO OOOOOYO OOOOOYO OOOOOYO OOOOOYO OOOOOYO OOOOOYO OOOOOYO OOOOOYO OOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li><li>YO OOOOOO</li>
      {chatMessages.map(message => 
        <ChatMessage
          key={message.id}
          {...message}
        />
      )}
    </ul>
  </div>
)

ChatMessageList.propTypes = {
  chatMessages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ChatMessageList