import React from "react";
import TextInput from "./TextInput";

class App extends React.Component {
  render() {
    return (
      <div>
        <form>
          <TextInput label="Name" name="name"/>
          <TextInput label="Audio Url" name="audioUrl"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default App;
