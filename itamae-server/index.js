const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const chefData = require("./data/chefData.json");
const recipes = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Itamae!");
});

app.get("/chef-data", (req, res) => {
  res.send(chefData);
});

app.get("/chef-data/:id", (req, res) => {
  res.send(chefData.find((chef) => parseInt(req.params.id) === chef.id) || {});
});

app.get("/recipes/chef/:id", (req, res) => {
  res.send(recipes.filter((r) => parseInt(req.params.id) === r.chef_id) || {});
});

app.listen(port, () => {
  console.log(`Itamae app listening on port ${port}`);
});
