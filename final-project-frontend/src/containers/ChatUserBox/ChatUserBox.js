import { connect } from 'react-redux'
import ChatUserList from '../../components/ChatUserList/ChatUserList'

const mapStateToProps = (state) => {
  return {
    userList: state.userList
  }
}
  
const ChatUserBox = connect(
  mapStateToProps,
  null
)(ChatUserList)

export default ChatUserBox