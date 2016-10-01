import React from "react";
import TextInput from "./TextInput";

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
      var newState = Object.assign({}, state);
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

class CreateRecording extends React.Component {
  onSubmit(ev) {
    ev.preventDefault();
    console.log("submitted");
  }

  onChange(ev) {
    ev.preventDefault();
    console.log("changed");
  }

  render() {
    return (
      <div>
        <form onChange={this.onChange} onSubmit={this.onSubmit}>
          <TextInput label="Name" name="name"/>
          <TextInput label="Audio Url" name="audioUrl"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CreateRecording;
