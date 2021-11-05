exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name", 64).notNullable();
      table.string("total_time");
      table.string("created_by");
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.integer("step_number").notNullable();
      table.string("step_instructions", 128).notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name", 128).notNullable();
      table.integer("quantity").notNullable();
    //   table.string("unit").notNullable();
    })
    .createTable("recipe", (table) => {
      table.increments("recipe_id");
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id").inTable("steps")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id").inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe")
};
