// Import React
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FormsPage from './FormsPage.js';
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';



class App extends Component {

  constructor(){
    super();
    this.state = {
      user: 'Evi',
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.state.user && <Welcome userName={this.state.user} />}
        <Home userName={this.state.user}/>,
        <FormsPage />,
      </div>
    );
  }
}

export default App;
