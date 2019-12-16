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
let id = 0;

module.exports = {
  // * Get
  getGames: (req, res) => {
    //* I expect get games to get the games arrays (2)
    res.status(200).send({ games, unplayedGames });
  },

  // * Post
  addGame: (req, res) => {
    const { newGame } = req.body;
    newGame.id = id;
    id++;
    if (req.query.gamearray === "played") {
      games.push(newGame);
    } else if (req.query.gamearray === "notplayed") {
      unplayedGames.push(newGame);
    }
    res.status(200).send({ games, unplayedGames });
  },

  // * Put
  updateGame: (req, res) => {
    // * I expect to edit the game, save it, and have it show up on the right array. U
  },

  // * Delete
  deleteGame: (req, res) => {
    const { id } = req.body;
    const index = games.findIndex(item => item.id === +id);
    // const index =
    games.splice(index, 1);
    res.status(200).send(games);
  }
};
