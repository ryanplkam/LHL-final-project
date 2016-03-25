const userList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHAT_USER':
      return [
        ...state, 
        action.user 
      ]
    default:
      return state
  }
}

export default userList
