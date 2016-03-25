const userIsTyping = (state = '', action) => {
  switch (action.type) {
    case 'USER_TYPING':
      return action.user + 'is typing.'
    default:
      return state
  }
}

export default userIsTyping
