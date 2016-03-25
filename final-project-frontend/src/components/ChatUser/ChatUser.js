import React, { PropTypes } from 'react'

const ChatUser = ({ user }) => (
  <li>
    <img src={user.profilePicUrl} />{' '}{user.name}
  </li>
)

export default ChatUser