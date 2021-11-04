exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 64).notNullable();
      table.string("created_at");
    })
    .createTable("steps", (table) => {
      table.increments("steps");
      table.integer("step_number").notNullable();
      table.string("step_name", 64).notNullable();
      table.string("instruction", 128).notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredients_id");
      table.string("ingredient_name", 128).notNullable();
      table.integer("quantity").notNullable();
    })
    .createTable("steps_ingredients", (table) => {
      table.increments("steps_ingredients_id");
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id").inTable("steps")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("ingredients_id").inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps_ingredients")
};
