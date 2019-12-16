import React, { Component } from "react";
import PlayedItem from "./PlayedItem";
import axios from "axios";
import "./GamesPlayed.css";
class GamesPlayed extends Component {
  constructor() {
    super();

    this.state = {
      games: []
    };
  }

  render() {
    return (
      <div>
        <wrapper>
          <div className="title">Games I Have Played</div>
        </wrapper>

        {this.props.games.map(e => (
          <div className="display-game">
            <div className="game-holder">
              <div className="image">{e.image}</div>
              <div className="game-title">{e.title}</div>
              <div className="mode">Mode: {e.mode}</div>
              <div>Cheats: {e.cheats}</div>
            </div>
            <button className="game-buttons">Edit</button>
            <button
              className="game-buttons"
              onClick={() => {
                this.props.deleteFn(e.id, "played");
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

export default GamesPlayed;
