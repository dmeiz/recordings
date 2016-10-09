import React from "react";
import TextInput from "./TextInput";

class CreateRecording extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.props.onCreateRecording(this.nameInput.value, this.audioUrlInput.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name: <input type="text" name="name" ref={(c) => {this.nameInput = c}}/></label><br/>
          <label>AudioUrl: <input type="text" name="audioUrl" ref={(c) => {this.audioUrlInput = c}}/></label><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CreateRecording;
