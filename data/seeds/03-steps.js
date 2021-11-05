
exports.seed = function(knex, Promise) {
  return knex("steps").insert([
    { step_number: 0, step_instructions: "Put a large saucepan on a medium heat" },
    { step_number: 1, step_instructions: "Marinate the chikn in some sauz" },
  ]);
};
