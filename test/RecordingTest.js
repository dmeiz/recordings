//var assert = require('assert');
import * as assert from 'assert';
import {recordingApp, createRecording} from '../guts';

describe('createRecording', () => {
  it ('should create an action', () => {
    let action = createRecording("name", "audioUrl");

    assert.equal("CREATE_RECORDING", action.type);
    assert.equal("name", action.name);
    assert.equal("audioUrl", action.audioUrl);
  });
});

describe('recordingApp', () => {
  it ('should return initial state', () => {
    let newState = recordingApp(undefined, {});

    assert.deepEqual([], newState.recordings);
  });

  it ('should add a recording on CREATE_RECORDING', () => {
    let newState = recordingApp(undefined, createRecording('name', 'audioUrl'));

    assert.equal(1, newState.recordings.length);
    assert.deepEqual({name:'name', audioUrl:'audioUrl'}, newState.recordings[0]);
  })
});

