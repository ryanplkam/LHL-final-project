import { combineReducers } from 'redux'
import chatMessages from './chat-messages'
import userIsTyping from './user-is-typing'
import userList from './user-list'
import authUser from './auth-user'

const rootReducer = combineReducers({
  authUser,
  chatMessages,
  userIsTyping,
  userList
})

export default rootReducer