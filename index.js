import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import { recordingApp } from './guts';

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

let store = createStore(recordingApp);
store.dispatch(createRecording("Wicked Jam", "http://s3.amazon.com/wicked-jam.mp3"));

function onCreateRecording(name, audioUrl) {
  store.dispatch(createRecording(name, audioUrl));
  hashHistory.push("/");
}

ReactDOM.render((<App store={store} onCreateRecording={onCreateRecording}/>), document.getElementById('content'));
