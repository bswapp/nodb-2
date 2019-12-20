const games = [
  {
    id: 0,
    image: "",
    title: "Trail of the Twister",
    mode: "Junior",
    cheats: "yes"
  }
];
const unplayedGames = [
  {
    id: 1,
    image: "",
    title: "Midnight in Salem",
    mode: "Junior",
    cheats: "yes"
  }
];
let id = 2;

module.exports = {
  // * Get
  getGames: (req, res) => {
    //* I expect get games to get the games arrays (2)
    res
      .status(200)
      .send({ games, unplayedGames })
      .catch(err => {
        res.status(500).send({ ErrorMessage: "Its Locked!" });
      });
  },

  // * Post
  addGame: (req, res) => {
    const { newGame } = req.body;
    console.log(newGame);
    newGame.id = id;
    id++;
    if (req.query.gamearray === "played") {
      games.push(newGame);
    } else if (req.query.gamearray === "notplayed") {
      unplayedGames.push(newGame);
    }
    res
      .status(200)
      .send({ games, unplayedGames })
      .catch(err => {
        res.status(500).send({ ErrorMessage: "Its Locked!" });
      });
  },

  // * Put
  updateGame: (req, res) => {
    const { id } = req.params;
    if (req.query.editgame === "played") {
      const index = games.findIndex(el => el.id === +id);
      const gameEdit = games.splice(index, 1);
      unplayedGames.push(gameEdit[0]);
    } else if (req.query.editgame === "notplayed") {
      const index = unplayedGames.findIndex(el => el.id === +id);
      const gameEdit = unplayedGames.splice(index, 1);
      games.push(gameEdit[0]);
    }
    res.status(200).send({ games, unplayedGames });
  },

  // * Delete
  deleteGame: (req, res) => {
    const { id } = req.params;
    if (req.query.deletegame === "played") {
      const index = games.findIndex(item => item.id === +id);
      games.splice(index, 1);
    } else if (req.query.deletegame === "notplayed") {
      const index = unplayedGames.findIndex(item => item.id === +id);
      unplayedGames.splice(index, 1);
    }
    res.status(200).send({ games, unplayedGames });
  }
};
