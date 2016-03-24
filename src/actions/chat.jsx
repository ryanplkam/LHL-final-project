import $ from 'jquery'
import { addChatMessage, userIsTypingAction } from '../actions'

module.exports = ({ dispatch, params }, socket) => {

  let roomHash = params.roomHash

  return () => {
    socket.emit('join room', roomHash)

    socket.on('new message', message => {
      dispatch(addChatMessage(
        message.id,
        message.user,
        message.text
      ))
    })
  
    const getMessages = () => {
      $.getJSON(`http://localhost:3000/chat/${roomHash}`)
      .done(messages => {
        messages.forEach(message => {
          dispatch(addChatMessage(
            message.id,
            message.User.username,
            message.text
          ))
        })
      })
    }

    const sendMessage = (userId, text) => {
      $.post('http://localhost:3000/chat/', {
        userId: userId,
        roomHash: roomHash,
        text: text
      }, 'json')
      .done(message => {
        socket.emit('new message', {
          id: message.id,
          user: message.User.username,
          text: message.text
        })
      })
      .fail(error => {
        console.log(error)
      })
    }

    const userIsTyping = (user) => {
      dispatch(userIsTypingAction(user))
    }

    return { getMessages, sendMessage, userIsTyping }
  }

}