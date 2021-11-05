const db = require("../data/db-config.js");

function getRecipes() {
  return db('recipes');
};

function getRecipesById(id) {
  return db('recipes')
    .where('recipe_id', id)
}

module.exports = {
  getRecipes,
  getRecipesById
};
