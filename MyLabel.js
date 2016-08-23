import React from "react";

class MyLabel extends React.Component {
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

export default MyLabel;
