import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import CreateRecording from './CreateRecording';
import Home from './Home';


class App extends React.Component {
  render() {
    let WrappedHome = () => (
        <Home recordings={this.props.recordings}/>
    )

    return (
      <Router history={hashHistory}>
        <Route path="/" component={WrappedHome} recordings={this.props.recordings}/>
        <Route path="/createRecording" component={CreateRecording}/>
      </Router>
    )
  }
}

export default App;
