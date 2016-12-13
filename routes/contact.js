const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/contact", contactController.sendContactRequest);
router.get("/contact", contactController.speak);
module.exports = router;