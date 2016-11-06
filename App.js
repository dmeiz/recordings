import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import Home from './Home';

class App extends React.Component {
  render() {
    let WrappedHome = () => (
      <Home recordings={this.props.store.getState().recordings} onCreateRecording={this.props.onCreateRecording}/>
    )

    return (
      <Router history={hashHistory}>
        <Route path="/" component={WrappedHome}/>
      </Router>
    )
  }
}

export default App;
