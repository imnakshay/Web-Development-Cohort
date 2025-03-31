const express = require("express");
const app = express();

function sqr(num) {
    return num * num;
}

app.get("/", (req, res) => {
    let num = parseInt(req.query.n);

    if (isNaN(num)) {
        return res.status(400).send("Error: Please provide a valid number.");
    }

    let sqrValue = sqr(num); // Call the function after defining it
    res.send(sqrValue.toString()); // Convert to string before sending
});

app.listen(3000, () => {
    console.log("Server Started at port number 3000");
});

