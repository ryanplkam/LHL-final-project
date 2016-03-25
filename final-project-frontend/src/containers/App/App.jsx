import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addAuthUser, addConnectedUser } from '../../actions'
import $ from 'jquery'

let App = React.createClass({

  componentDidMount() {
    console.log('mounted!!!')
    let _this = this
    let token = localStorage.getItem('cinemapp-token')
    $.post('http://localhost:3000/auth', {
      token: token
    }, 'json')
    .then(function(user) {
      console.log(user)
      _this.props.dispatch(addAuthUser(user))
    })
    .then(function() {
      _this.props.dispatch(addConnectedUser(_this.props.authUser))
    })
  },
  
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})


const mapStateToProps = (state) => {
  return {
    authUser: state.authUser
  }
}

export default connect(mapStateToProps)(App)
