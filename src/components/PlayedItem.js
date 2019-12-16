import React, { Component } from "react";

class PlayedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      image: "",
      title: "",
      mode: "",
      cheats: "",
      notes: ""
    };
  }

  render() {
    return (
      <div className="played-item">
        <div>{this.props.gamesInfo.image}</div>
        <div>{this.props.gamesInfo.title}</div>
        <div>{this.props.gamesInfo.mode}</div>
        <div>{this.props.gamesInfo.cheats}</div>
        <div>{this.props.gamesInfo.notes}</div>
      </div>
    );
  }
}

export default PlayedItem;
