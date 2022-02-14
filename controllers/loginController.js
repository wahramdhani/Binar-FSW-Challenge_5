const express = ("express");
const user = require("../db/user.json");
const fs = require ("fs");

const getUserData = () => {
    const jsonData = fs.readFileSync("db/user.json");
    return JSON.parse(jsonData);
}
module.exports = {
    sign(req, res) {
        const items = getUserData ();
        const email = req.body.email;
        const password = req.body.password;
        const getUserEmail = items.find((e) => e.email == email);
        const getUserPassword = items.find ((e) => e.password == password);
        console.log(getUserEmail);
        console.log(email);
        if (getUserEmail !== email) {
        return res.render("login")
        }
        if (getUserPassword !== password) {
        return res.render("login")
        }
        res.status(200).redirect("/").json({
            status: true,
            message: "sukses"
        })
      
    },
    loginIndex(req, res) {
        res.render("login")
    }
}