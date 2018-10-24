let express = require("express");
let app = express();

const PORT = 3000;

let characters = [
    {
        routeName: "captainamerica",
        name: "Captain America",
        role: "Saving the world",
        age: 100,
        strengthPoints: 1000
    },
    {
        routeName: "drstrange",
        name: "Dr Strange",
        role: "Time weaver",
        age: 40,
        strengthPoints: 3000
    },
    {
        routeName: "ironman",
        name: "Iron Man",
        role: "Saving the world, too",
        age: 41,
        strengthPoints: 500
    }];

app.get("/", function (req, res) {
    res.send("Welcome to Avengers page!");
});

app.listen(PORT, function () {
    console.log("Avengers assemble  on PORT" + PORT);
});

app.get("/api/v1/characters", function (req, res) {
    return res.json(characters);

});