import React, { Component } from "react";
import axios from "axios";
import "./NotPlayedItems.css";

// * Refers to each game I haven't played in the list *//
class NotPlayedItem extends Component {
  constructor() {
    super();
    this.state = {
      unplayedGames: []
    };
  }

  render() {
    return (
      <div>
        <wrapper>
          <div className="title">Games I Have Not Played</div>
        </wrapper>
        {this.props.unplayedGames.map(e => (
          <div className="info-holder">
            <div>{e.image}</div>
            <div>{e.title}</div>
            <div>Mode: {e.mode}</div>
            <div>Cheats: {e.cheats}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default NotPlayedItem;
