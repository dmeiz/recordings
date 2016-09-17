import React from "react";
import ReactDOM from "react-dom";
import TextInput from "./TextInput";

ReactDOM.render(
  (
    <div>
      <TextInput label="Name" name="name"/>
      <TextInput label="Audio Url" name="audioUrl"/>
    </div>
  ),
  document.getElementById('content')
);

