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
        Welcome to Recordings!
        <ul>
          <li><Link to="/createRecording">Create Recording</Link></li>
        </ul>

        <h1>Your Recordings</h1>
        <ul>
          {this.props.recordings.map((recording) => {
            return <li>{recording.name} ({recording.audioUrl})</li>
          })}
        </ul>
        <form onSubmit={this.onSubmit}>
          <label>Name: <input type="text" name="name" ref={(c) => {this.nameInput = c}}/></label><br/>
          <label>AudioUrl: <input type="text" name="audioUrl" ref={(c) => {this.audioUrlInput = c}}/></label><br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Home;
