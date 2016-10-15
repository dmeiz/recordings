//var assert = require('assert');
import * as assert from 'assert';
import {recordingApp, createRecording} from '../guts';

describe('createRecording', () => {
  /*
  it ('should return a CREATE_RECORDING action', () => {
    var newState = recordingApp(null, {});
    assert.equal({recordings:[]}, newState);
  });
  */

  it ('should create an action', () => {
    let action = createRecording("name", "audioUrl");

    assert.equal("CREATE_RECORDING", action.type);
    assert.equal("name", action.name);
    assert.equal("audioUrl", action.audioUrl);
  });
});

