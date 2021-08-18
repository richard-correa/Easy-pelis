const express = require("express");
const path = require("path");
const router = express.Router();
const indexController = require("../controllers/indexController");
router.get("/index", indexController.GetIndexController);
router.get("/usuario", indexController.GetUser);
router.get("/favoritos", indexController.GetFavorito);
router.get("/login", indexController.GetLogin);
router.get("/tickets", indexController.GetTickets);

module.exports = router;
