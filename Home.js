import React from "react";
import { Link } from 'react-router';

class Home extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.onCreateRecording(this.nameInput.value, this.audioUrlInput.value);
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
      </div>
    );
  }
}

export default Home;
