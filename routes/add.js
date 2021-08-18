const express = require("express");
const addController = require("../controllers/addController");
const router = express.Router();

router.get("/add", addController.GetAddMovie);
router.post("/add", addController.PostAddMovie);
router.get("/edit-movie/:movieId", addController.GetEditMovie);
router.post("/edit-movie", addController.PostEditMovie);
router.post("/delete-movie", addController.PostDeleteMovie); //route params, query params
module.exports = router;
