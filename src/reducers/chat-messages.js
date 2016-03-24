const chatMessages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHAT_MESSAGE':
      return [
        ...state, {
        id: action.id,
        user: action.user,
        text: action.text
      }]
    default:
      return state
  }
}

export default chatMessages
