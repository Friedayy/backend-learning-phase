const express = require("express")
const cors = require("cors")

const app = express();


app.use(express.json());
app.use(cors());

const users = [
    {id: 1, name: "Amaan", email: "amaandev@gamil.com"},
    {id: 2, name: "Suhaib", email: "medsuhaib@gamil.com"},
    {id: 3, name: "Sami", email: "samidev@gamil.com"},
    {id: 4, name: "Toyyib", email: "medtoyyib@gmail.com"},
];

app.get("/users", (req , res)=> {
    res.json(users);
});
/* GETTING ELEMENT BY ID, NOT USING IN THIS CASE, JUST TO LEARNING PURPOSE
app.get("/users/:id", (req , res)=> {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);

    if(!user){
        return res.status(404).json({
            message: "User not found"
        });
    }
    res.json(user)
})
 */


app.listen(5000, ()=> {
    console.log("server is listening on port 5000");
})