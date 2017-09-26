import React, { Component } from 'react';
import Map from './Map';
import Landing from './LandingPage'
import { Router, Route, browserHistory } from 'react-router';

// App component
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={Landing}/>
          <Route path="/map" component={Map}/>
      </Router>
    );
  }
}

export default App;
