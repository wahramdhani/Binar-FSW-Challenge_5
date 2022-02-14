const express = require("express");
const path = require("path");
const router = express.Router ();


router.get("/", (req, res) => {
    res.render("landing-page")
});

router.post("/", (req, res) => {
    res.status(201).redirect("/")
});

module.exports = router;