const authUser = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_AUTH_USER':
      return action.user
    default:
      return state
  }
}

export default authUser
