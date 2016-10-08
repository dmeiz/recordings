import React from "react";
import TextInput from "./TextInput";

class CreateRecording extends React.Component {
  onSubmit(ev) {
    ev.preventDefault();
    console.log("submitted");
    console.log("nameInput=" + this.nameInput.value);
    //this.props.store.dispatch(createRecording())
  }

  onChange(ev) {
    ev.preventDefault();
    console.log("changed");
  }

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name: <input type="text" name="name" ref={(c) => {this.nameInput = c}}/></label><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default CreateRecording;
