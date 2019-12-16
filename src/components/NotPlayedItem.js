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
          <div className="display-game">
            <div className="info-holder">
              <div>{e.image}</div>
              <div>{e.title}</div>
              <div>Mode: {e.mode}</div>
              <div>Cheats: {e.cheats}</div>
            </div>
            <button
              onClick={() => {
                this.props.handleUpdateGame(e.id, "notplayed");
              }}
              className="game-buttons"
            >
              Edit
            </button>

            <button
              className="game-buttons"
              onClick={() => {
                this.props.deleteFn(e.id, "notplayed");
              }}
            >
              Delete
            </button>

            <button className="game-buttons">Submit</button>
          </div>
        ))}
      </div>
    );
  }
}

export default NotPlayedItem;
