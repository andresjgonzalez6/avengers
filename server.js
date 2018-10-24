let express = require("express");
let path = require("path");
let app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

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

app.get("/", function(req,res){
    res.sendFile(path.join(_dirname, "view.html"));
});

app.get("/add", function (req, res){
    res.sendFile(path.join(_dirname, "add.html"));
});

app.get("/", function (req, res) {
    res.send("Welcome to Avengers page!");
});

app.get("/", function(req, res) {
    res.sendFile("view.html");
})

app.get("/api/v1/characters", function (req, res) {
    return res.json(characters);

});

app.get("/api/v1/characters/:characterId", function (req, res) {
    let characterId = req.params.characterId;

    console.log(characterId);

    for (let i = 0; i < characters.length; i++) {
        if (characterId === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false + " Not a hero option");
});

app.post("/api/v1/characters", function (req, res) {
    let newCharacter = req.body;

    console.log(newCharacter);

    characters.push(newCharacter);

    return res.json(newCharacter);
});

app.listen(PORT, function () {
    console.log("Avengers assemble  on PORT" + PORT);
});
