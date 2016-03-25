import React, { Component, PropTypes } from 'react'
import fbLoginAction from '../../actions/fbauth'


const FBLogin = ({ authUser }) => (
  <div>
    <button onClick={fbLoginAction}>
      Login w/ FB
    </button>
  </div>
)

export default FBLogin