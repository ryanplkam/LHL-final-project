import React, { Component } from 'react';

require('./FullScreenVideo.scss');

class FullScreenVideo extends Component {
  render() {
    return (
      <div>
        <video autoPlay poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop>
          <source src="//demosthenes.info/assets/videos/polina.webm" type="video/webm"/>
          <source src="//demosthenes.info/assets/videos/polina.mp4" type="video/mp4"/>
        </video>
      </div>
    )
  }
}

export default FullScreenVideo