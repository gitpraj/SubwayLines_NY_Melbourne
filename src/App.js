import React, { Component } from 'react';
import Map from './Map';
import Landing from './LandingPage'
import { Router, Route, browserHistory } from 'react-router';
import GoogleMap from './GoogleMap'

// App component
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={Landing}/>
          <Route path="/map" component={Map}/>
          <Route path="/seven11" component={GoogleMap}/>
      </Router>
    );
  }
}

export default App;
