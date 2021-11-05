
exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Chicken", quantity: 6 },
    { ingredient_name: "Olive Oil", quantity: 1 },
    { ingredient_name: "Garlic", quantity: 8 },
  ]);
};
