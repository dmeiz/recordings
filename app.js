import React from "react";
import ReactDOM from "react-dom";
import TextInput from "./TextInput";

ReactDOM.render(
  (
    <div>
      <form>
        <TextInput label="Name" name="name"/>
        <TextInput label="Audio Url" name="audioUrl"/>
        <input type="submit"/>
      </form>
    </div>
  ),
  document.getElementById('content')
);

