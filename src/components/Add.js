import React, { Component } from "react";
import "./Add.css";

class Add extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="add-bar">
          <input placeholder="title" type="text"></input>

          <input placeholder="mode" type="text"></input>

          <input placeholder="cheats" type="text"></input>

          <input placeholder="image" type="text"></input>

          <input placeholder="notes" type="text"></input>

          <button>Add Game</button>
        </div>
      </div>
    );
  }
}

export default Add;
