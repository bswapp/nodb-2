import React, { Component } from "react";
import "./App.css";
import Add from "./components/Add";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playedGames: [],
      unplayedGames: []
    };
  }

  addGame(newGame) {
    axios.post("/api/");
  }

  render() {
    return (
      <div className="App">
        <Add />
      </div>
    );
  }
}

export default App;
