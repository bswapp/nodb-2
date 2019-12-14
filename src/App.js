import React, { Component } from "react";
import "./App.css";
import Add from "./components/Add";
import axios from "axios";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playedGames: [],
      unplayedGames: []
    };
  }

  componentDidMount() {
    axios.get("/api/games").then(res => {
      this.setState({
        playedGames: res.data,
        unplayedGames: res.data
      });
    });
  }

  addGame(newGame) {
    axios.post("/api/games?gamearray=played", { newGame }).then(res => {
      this.setState({
        playedGames: res.data
      });
    });
  }

  notplayGame(newGame) {
    axios.post("/api/games?gamearray=notplayed", { newGame }).then(res => {
      this.setState({
        unplayedGames: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Add />
      </div>
    );
  }
}

export default App;
