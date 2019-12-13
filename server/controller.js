const playedGames = [];
const unplayedGames = [];

module.exports = {
  getGames: (req, res) => {
    //* I expect get games to get the games arrays (2)
  },
  addGame: (req, res) => {
    const { newGame } = req.body;
    newGame.id = id;
    id++;
    if (req.query.gamearray === "played") {
      playedGames.push(newGame);
    } else if (req.query.gamearray === "notplayed") {
      unplayedGames.push(newGame);
    }
    res.status(200).send({ playedGames, unplayedGames });
  },
  updateGame: (req, res) => {
    // * I expect to edit the game, save it, and have it show up on the right array. U
  },
  deleteGame: (req, res) => {
    // * I expect to be able to select a game list and be able to delete it.
  }
};
