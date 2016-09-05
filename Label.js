import React from "react";

class Label extends React.Component {
  render() {
    return (
      <div>
        <label>
          Name:
          <input name="name"/>
        </label>
      </div>
    )
  }
}

export default Label;
