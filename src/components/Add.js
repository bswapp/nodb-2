import React, { Component } from "react";
import "./Add.css";

class Add extends Component {
  constructor() {
    super();
    this.state = {
      image: "",
      title: "",
      mode: "",
      array: "",
      cheats: "",
      notes: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  chooseArray = () => {
    console.log(this);
    if (this.state.array === "played") {
      this.props.addGame(this.state);
    } else if (this.state.array === "notPlayed") {
      this.props.notplayGame(this.state);
    }
  };

  // * below are the buttons for my add bar //
  render() {
    return (
      <div className="add">
        <div className="add-bar">
          <input
            placeholder="Title"
            type="text"
            id="title"
            name="title"
            onChange={e => this.handleChange(e)}
          />

          <select onChange={e => this.handleChange(e)} name="mode" id="mode">
            <option value="" disabled selected hidden>
              Mode Played
            </option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>

          <select onChange={e => this.handleChange(e)} name="array" id="mode">
            <option value="" disabled selected hidden>
              Has Played
            </option>
            <option value="played">Played</option>
            <option value="notPlayed">Not Played</option>
          </select>

          <select
            onChange={e => this.handleChange(e)}
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

          <input
            placeholder="Image"
            type="text"
            name="image"
            onChange={e => this.handleChange(e)}
          />

          <input
            placeholder="Notes"
            type="text"
            name="notes"
            onChange={e => this.handleChange(e)}
          />

          <button onClick={this.chooseArray}>Add Game</button>
        </div>
      </div>
    );
  }
}

export default Add;
