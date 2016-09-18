import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import CreateRecording from './CreateRecording';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/createRecording" component={CreateRecording}/>
      </Router>
    )
  }
}

export default App;
