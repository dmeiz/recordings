import React from "react";
import TextInput from "./TextInput";

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
