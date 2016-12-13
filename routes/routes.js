const express = require("express");
const router = express.Router(); // define express routing method
const indexController = require("../controllers/indexController");

router.get("/", indexController.showIndex);

module.exports = router;