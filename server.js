import express from "express";

const app = express();

const PORT = 2000;

app.get("/", (req, res)=> {
    const data = {
        name: "nirman",
        email: "nirmankhanal477@gmail.com",
        bio: "Act like you don't afford the bread until they know you own the bakery.",
        business: "Himalyan Java"
    }
    return res.status(200).json({
        data
    });
});

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
});