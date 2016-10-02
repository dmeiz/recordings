import React from "react";
import { Link } from 'react-router';

class Home extends React.Component {
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
            return <li>{recording.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
