import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const user = [];
const tweets = [];

app.post("/sign-up", (req, res) => {

    const { username, avatar } = req.body;

    if (!username || !avatar) {
        res.status(400).send("Insira todos os campos!");
        return;
    }

    const data = {
        username,
        avatar
    }
    user.push(data);

    res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {

    const { user: username } = req.headers;
    const { tweet } = req.body;

    if (!username || !tweet) {
        res.status(400).send("Insira todos os campos");
        return;
    }

    tweets.push({ username, tweet });

    res.status(201).send("OK");
});



app.listen(5000);