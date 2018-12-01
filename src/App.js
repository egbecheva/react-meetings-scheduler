// Import React
import React, { Component, Root } from 'react';
import { render } from "react-dom";
import { Router, navigate } from '@reach/router';
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
      displayName: null,
      usedID: null
    }
  }

   componentDidMount() {
     firebase.auth().onAuthStateChanged(FBUser => {
       if (FBUser) {
         this.setState({
          userName: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
         });
       }
     });
   }

   regUser = unsernm => (
     firebase.auth().onAuthStateChanged(FBUser => {
       FBUser.updateProfile({
         displayName: unsernm
       }).then(()=>{
         this.setState({
           user: FBUser,
           displayName: FBUser.displayName,
           userID: FBUser.uid
         });
         navigate('/meetings')
       })
     })
   )
  
  logOutUser = e => {
    e.preventDefault();
    this.setState({
      userName: null,
      displayName: null,
      userID: null
    });

    firebase.auth().signOut
    
  }

  addMeeting = meetingName => {
    const ref = firebase
    .database()
    .ref(`meetings/${this.state.userName.uid}`);
    ref.push({meetingName: meetingName});
  }

  render() {
    return (
      <div>
        <Navigation userName={this.state.userName} logOutUser = {this.logOutUser} />
        {this.state.userName && <Welcome userName={this.state.displayName} logOutUser = {this.logOutUser}/>}

        <Router>
          <Home userName={this.state.userName} path = "/"  />
          <Login path = "/login"/>
          <Meetings path = "/meetings"  addMeeting = {this.addMeeting} />
          <Register path = "/register" registerUser={this.regUser} />
        </Router>
      </div>
    );
  }
}

export default App;
