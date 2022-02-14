const express = require("express");
const path = require("path");
const router = express.Router();
const auth = require("../controllers/loginController")

router.get("/gameplay", (req, res) => {
    res.render("suit")
} )

module.exports = router


