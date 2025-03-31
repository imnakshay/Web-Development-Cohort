const express = require("express");
const app = express();

let users = [{
    name: "john",
    kidneys: [{ health: "healthy" }, { health: "unhealthy" }]
}];


app.get("/", (req, res) => {
    let numberOfKidneys = users[0].kidneys.length;

    let numberOfHealthyKindeys = 0;

    for (let i = 0; i < numberOfKidneys; i++) {
        if (users[0].kidneys[i].health == "healthy") numberOfHealthyKindeys++;
    }

    numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKindeys;

    res.json({ name: users[0].name, numberOfKidneys, numberOfHealthyKindeys, numberOfUnhealthyKidneys });
})
app.post("/", (req, res) => {
    users[0].kidneys.push({ health: "healthy" });
    res.send("New kidney added and total kidneys are: " + users[0].kidneys.length);
})

app.put("/",(req,res)=>{
    for(let i = 0 ; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].health == "unhealthy") {
            users[0].kidneys[i].health = "healthy";
            res.send("Kidney replacement was successful");
            break;
        }
    }
    res.send("No unhealthy Kindey was found...");
})

app.delete("/",(req,res)=>{
    for(let i = 0 ; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].health == "unhealthy") {
            users[0].kidneys.splice(i,1);
            res.send("Unhealthy Kidneys were removed..");        
        }
    }
    res.send("No Unhealthy kidney was found")
    
})


app.listen(3000, () => {
    console.log("server started at port 3000");
})
