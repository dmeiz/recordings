import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import CreateRecording from './CreateRecording';
import Home from './Home';

class App extends React.Component {
  render() {
    let WrappedHome = () => (
      <Home recordings={this.props.store.getState().recordings} onCreateRecording={this.props.onCreateRecording}/>
    )

    let WrappedCreateRecording = () => (
      <CreateRecording store={this.props.store} onCreateRecording={this.props.onCreateRecording}/>
    )

    return (
      <Router history={hashHistory}>
        <Route path="/" component={WrappedHome}/>
        <Route path="/createRecording" component={WrappedCreateRecording}/>
      </Router>
    )
  }
}

export default App;
