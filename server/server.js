require("dotenv").config();
const express = require("express");
const { SERVER_PORT } = process.env;
const ctrl = require("./controllers/controller");

const app = express();

app.use(express.json());

app.get("/api/games", ctrl.getGames);
app.post("/api/games", ctrl.addGame);
app.put("/api/games/:id", ctrl.updateGame);
app.delete("/api/games:id", ctrl.deleteGame);

app.listen(SERVER_PORT, () =>
  console.log(`${SERVER_PORT} welcome to the club`)
);
