exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    {
      recipe_name: "Chicken Adobo",
      total_time: "40mins",
      created_by: "Mama Sha",
    },
    {
      recipe_name: "Vege Latkas",
      total_time: "30mins",
      created_by: "Jessie Yarmoff",
    },
  ]);
};
