import React from "react";
import { Link } from 'react-router';

class Home extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      errors: []
    }
  }

  onSubmit(ev) {
    ev.preventDefault();

    if (!this.audioUrlInput.value.match(/^http/)) {
      this.setState({errors: ["Audio url is invalid."]});
    }
    else {
      this.setState({errors: []});
      this.props.onCreateRecording(this.nameInput.value, this.audioUrlInput.value);
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome to Recordings!</h1>
        <h2>Your Recordings</h2>
        <ul>
          {this.props.recordings.map((recording) => {
            return <li>{recording.name} ({recording.audioUrl})</li>
          })}
        </ul>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="name" placeholder="Name" ref={(c) => {this.nameInput = c}}/>
          <input type="text" name="audioUrl" placeholder="Audio URL" ref={(c) => {this.audioUrlInput = c}}/>
          <input type="submit"/>
        </form>
        {(() => {
          if (this.state.errors.length > 0) {
            return <ul>{this.state.errors.map((error) => {return <li>{error}</li>})}</ul>;
          }
        })()}
      </div>
    );
  }
}

export default Home;
