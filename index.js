const express = require("express");
const app = express();
const port = 4001;

const mainRoute = require("./routes/main");
const login = require("./routes/loginRoute")
const gamePlay = require ("./routes/game")
const register = require ("./routes/registerRoute")

const user = require("./db/user.json");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", function (req, res, next){
    console.log("Time: ", Date());
    console.log("Request URL: ", req.originalUrl);
    console.log("Request Type: ", req.method);
    next();
})

app.use("/", mainRoute);
app.use("/", login);
app.use("/", gamePlay);
app.use("/", register);


app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})