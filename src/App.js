// Import React
import React, { Component, Root } from 'react';
import { render } from "react-dom";
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css';
import FormsPage from './FormsPage.js';
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Meetings from './Meetings';
import Register from './Register';
import firebase from './Firebase';




class App extends Component {

  constructor(){
    super();
    this.state = {
      userName: null,
    }
  }


  // Connection with Firebase
  componentDidMount() {
    const ref = firebase.database().ref('userName');


    ref.on('value', snapshot => {
      let FBUser = snapshot.val();
      this.setState({ userName: FBUser });
    });
  }

  render() {
    return (
      <div>
        <Navigation userName={this.state.userName} />
        {this.state.userName && <Welcome userName={this.state.userName} />}

        <Router>
          <Home path = "/" userName={this.state.userName} />
          <Login path = "/login"/>
          <Meetings path = "/meetings" />
          <Register path = "/register" />
        </Router>
      </div>
    );
  }
}

export default App;
