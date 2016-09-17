import React from "react";

class TextInput extends React.Component {
  render() {
    return (
      <div>
        <label>
          {this.props.label}:
          <input name="{this.props.name}"/>
        </label>
      </div>
    )
  }
}

export default TextInput;
