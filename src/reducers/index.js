import { combineReducers } from 'redux'
import chatMessages from './chat-messages'
import userIsTyping from './user-is-typing'

const rootReducer = combineReducers({
  chatMessages,
  userIsTyping
})

export default rootReducer