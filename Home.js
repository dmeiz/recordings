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
      </div>
    );
  }
}

export default Home;
