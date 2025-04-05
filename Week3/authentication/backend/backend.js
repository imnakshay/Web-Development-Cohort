const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
const skey = "billionaire";

app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    if (username === 'imnakshay' && password === "123") {
        const token = "Bearer " + jwt.sign({ username }, skey);
        res.json({ token });
    }
    else {
        res.status(400).json({ message: "Wrong username or Password" });
    }
})

app.get("/user", (req, res) => {
    let auth = req.headers.authorization;
    let token = auth && auth.split(" ")[1];
    if (!token) res.status(400).json({ message: "not valid token" });
    let decode = jwt.verify(token, skey);
    if (decode.username == "imnakshay") {
        res.json({ username: "imnakshay", password: "123" });
    }
})

app.listen(3000, () => {
    console.log("the server started at port 3000");
})