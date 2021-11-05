const express = require("express");
const model = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
  model
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  model
    .getRecipesById(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(next);
})




router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
