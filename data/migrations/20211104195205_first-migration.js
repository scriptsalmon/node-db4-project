
exports.up = function(knex) {
  return knex.schema.createTable('recipes', (table) => {
      table.increments('recipe_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes');
};
