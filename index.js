import React from "react";
import ReactDOM from "react-dom";

// tutorial1.js
class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        Hello, world! I am a Foo.
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);


