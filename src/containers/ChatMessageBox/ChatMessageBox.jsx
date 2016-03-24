import { connect } from 'react-redux'
import ChatMessageList from '../../components/ChatMessageList/ChatMessageList'

const mapStateToProps = (state) => {
  return {
    chatMessages: state.chatMessages
  }
}
  
const ChatMessageBox = connect(
  mapStateToProps,
  null
)(ChatMessageList)

export default ChatMessageBox