import React, { PropTypes } from 'react'
import ChatUser from '../ChatUser/ChatUser'

const ChatUserList = ({ userList }) => (
  <ul>
    {userList.map(user => 
      <ChatUser
        key={user.id}
        {...user}
      />
    )}
  </ul>
)

export default ChatUserList