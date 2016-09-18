import React from "react";
import { Router, Route, hashHistory, Link } from 'react-router';
import CreateRecording from './CreateRecording';

const Hello = () => (
  <div>
    Welcome to Recordings!
    <ul>
      <li><Link to="/createRecording">Create Recording</Link></li>
    </ul>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/createRecording" component={CreateRecording}/>
        <Route path="/" component={Hello}  history={hashHistory}/>
      </Router>
    )
  }
}

export default App;
