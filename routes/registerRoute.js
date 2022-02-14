const express = require("express");
const router = express.Router();
const fs = require("fs");

const getUser = () => {
  const jsonData = fs.readFileSync("db/user.json");
  return JSON.parse(jsonData);
};

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", (req, res) => {
  let { email, password } = req.body;
  const items = getUser();
  console.log(items);
  //   id = items[items.length - 1].id + 1;
  const newUser = {
    email,
    password,
  };
  items.push(newUser);
  //   const jsonData = JSON.stringify(items);
  fs.writeFile("db/user.json", JSON.stringify(items), (error) => {
    res.status(201).redirect("/login")
    // .json({
    //   message: "success",
    //   data: newUser,
    // });
  });
});

module.exports = router;