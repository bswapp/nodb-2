import React, { Component } from "react";
import "./Add.css";

class Add extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // axios.post().then(res => this.setState({

  // }))

  // * below are the buttons for my add bar //
  render() {
    return (
      <div className="add">
        <div className="add-bar">
          <input placeholder="Title" type="text" id="title"></input>

          <select
            onChange={e => console.log(e.target.value)}
            name="mode"
            id="mode"
          >
            <option value="" disabled selected hidden>
              Mode Played
            </option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>

          <select
            onChange={e => console.log(e.target.value)}
            name="cheats"
            id="cheats"
          >
            <option disabled selected hidden>
              {" "}
              Cheats Used
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <input placeholder="Image" type="text"></input>
          <input placeholder="Notes" type="text"></input>
          <button>Add Game</button>
        </div>
      </div>
    );
  }
}

export default Add;
