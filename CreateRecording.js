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
  return state;
}

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
