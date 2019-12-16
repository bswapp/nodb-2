import React, { Component } from "react";
import "./App.css";
import Add from "./components/Add";
import axios from "axios";
import Header from "./components/Header";
import GamesPlayed from "./components/GamesPlayed";
import NotPlayedItem from "./components/NotPlayedItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      unplayedGames: []
    };
    this.addGame = this.addGame.bind(this);
    this.notplayGame = this.notplayGame.bind(this);
    this.deleteGame = this.deleteGame.bind(this);
  }

  componentDidMount() {
    axios.get("/api/games").then(res => {
      // console.log(res.data.games);
      this.setState({
        games: res.data.games,
        unplayedGames: res.data.unplayedGames
      });
    });
  }

  deleteGame = (id, query) => {
    axios.delete(`/api/games/${id}?deletegame=${query}`).then(res => {
      this.setState({
        games: res.data.games,
        unplayedGames: res.data.unplayedGames
      });
    });
  };

  addGame(newGame) {
    console.log("this is cool");
    axios.post("/api/games?gamearray=played", { newGame }).then(res => {
      this.setState({
        games: res.data.games
      });
    });
  }

  notplayGame(newGame) {
    axios.post("api/games?gamearray=notplayed", { newGame }).then(res => {
      this.setState({
        unplayedGames: res.data.unplayedGames
      });
    });
  }

  handleUpdateGame = (id, query) => {
    axios.put(`/api/games/${id}?editgame=${query}`).then(res => {
      this.setState({
        games: res.data.games,
        unplayedGames: res.data.unplayedGames
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <GamesPlayed
          handleUpdateGame={this.handleUpdateGame}
          deleteFn={this.deleteGame}
          games={this.state.games}
        />
        <NotPlayedItem
          deleteFn={this.deleteGame}
          unplayedGames={this.state.unplayedGames}
          handleUpdateGame={this.handleUpdateGame}
        />
        <Add addGame={this.addGame} notplayGame={this.notplayGame} />
      </div>
    );
  }
}

export default App;
