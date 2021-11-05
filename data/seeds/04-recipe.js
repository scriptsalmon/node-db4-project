
exports.seed = function(knex, Promise) {
  return knex("recipe").insert([
    { recipe_id: 1, step_id: 1, ingredient_id: 1 },
  ]);
};
