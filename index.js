import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import { recordingApp, createRecording } from './guts';

let store = createStore(recordingApp);

function onCreateRecording(name, audioUrl) {
  store.dispatch(createRecording(name, audioUrl));
}

var render = () => {
  ReactDOM.render((<App store={store} onCreateRecording={onCreateRecording}/>), document.getElementById('content'));
}

store.subscribe(render);

store.dispatch(createRecording("Wicked Jam", "http://s3.amazon.com/wicked-jam.mp3"));
