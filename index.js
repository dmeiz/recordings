import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';

/* state
{
  recordings: [
    {
      name: "Wicked Jam",
      audioUrl: "https://s3.amazon.com/..."
    },
    ...
  ]
}
*/

const createRecording = (name, audioUrl) => (
  {
    type: "CREATE_RECORDING",
    name,
    audioUrl
  }
);

const initialState = {
  recordings: []
}

function recordingApp(state = initialState, action) {
  console.log(`Got action ${action.type}`);
  switch (action.type) {
    case "CREATE_RECORDING":
      let newState = Object.assign({}, state);
      newState.recordings.push(
        {
          name: action.name,
          audioUrl: action.audioUrl
        }
      );
      return newState;

    default:
      return state;
  }
}

window.recordingApp = recordingApp
window.createRecording = createRecording

let store = createStore(recordingApp);

debugger

ReactDOM.render((<App/>), document.getElementById('content'));
