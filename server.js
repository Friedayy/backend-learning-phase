const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: "Amaan", email: "amaandev253@gmail.com"},
    {id: 2, name: "Sami", email: "bhatsami@gamil.com"},
];

app.get("/users", (req , res)=> {
    res.json(users);
});

app.post("/users", (req , res)=> {
    const { name, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(5000, ()=> {
    console.log("Server is listening on port 5000");
});