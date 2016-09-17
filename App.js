import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import CreateRecording from './CreateRecording';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={CreateRecording}  history={hashHistory}/>
      </Router>
    )
  }
}

export default App;
