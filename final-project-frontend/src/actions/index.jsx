export const addChatMessage = (id, user, text) => {
  return {
    type: 'ADD_CHAT_MESSAGE',
    id: id,
    user: user,
    text: text
  }
}

export const userIsTypingAction = (user) => {
  return {
    type: 'USER_TYPING',
    user: user
  }
}

export const addConnectedUser = (user) => {
  return {
    type: 'ADD_CHAT_USER',
    user: user
  }
}

export const addAuthUser = (user) => {
  return {
    type: 'ADD_AUTH_USER',
    user: user
  }
}