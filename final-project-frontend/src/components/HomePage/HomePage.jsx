import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import FullScreenVideo from '../FullScreenVideo/FullScreenVideo'

// Require the styles for this component
require('./HomePage.scss');

class HomePage extends Component {
  render() {
    return (
      <div>

        <FullScreenVideo/>

        <Grid className='jumbotron-home-page'>
          <Row>
            <Col lg={6} md={8} sm={8} xs={12} className='col-jumbotron'>  
              <h1>Paste a YouTube link to get started!</h1>
              <form>
                <input></input>
                <br/>
                <button className='button button-highlight button-large p'>Go</button>
              </form>
              <br/>
              <a href="#"><span className='p'>Login with Facebook</span></a>
            </Col>
          </Row>
        </Grid>
        
        <div className='body-home-page'>
          <Grid>
            <Row>
              
              <Col lg={7} md={7} sm={7} xs={12} className='text-col'>
                <h1>How it works</h1>
                <p> This is the sergeant
    Who like a good and hardy soldier fought
    'Gainst my captivity. Hail, brave friend!
    Say to the king the knowledge of the broil
    As thou didst leave it.</p>
                <p>This is the sergeant
    Who like a good and hardy soldier fought
    'Gainst my captivity. Hail, brave friend!
    Say to the king the knowledge of the broil
    As thou didst leave it.</p>
              </Col>

              <Col lg={5} md={5} sm={5} xs={12} className='popcorn-col'>
                <img src="http://previews.123rf.com/images/worldofvector/worldofvector1406/worldofvector140600092/29121907-Popcorn-and-soda-with-straw-Cinema-icon-in-flat-dsign-style-Vector-illustration-Stock-Vector.jpg"/>
              </Col>
            </Row>
          </Grid>
        </div>

      </div>
    )
  }
}

export default HomePage 