import React from "react";
import ReactDOM from "react-dom";
import MyLabel from "./MyLabel";
console.log(MyLabel);

ReactDOM.render(
  (<div><MyLabel /><MyLabel /></div>),
  document.getElementById('content')
);

