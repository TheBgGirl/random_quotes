const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { sourceMapsEnabled } = require("process");

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions))

const PORT = 8080;
const JSON_FILE = "quotes.json"

app.get("/random", (req, res) => {
    const file = fs.readFileSync(JSON_FILE);
    const jsonData = JSON.parse(file);
    const randomQuote = jsonData.quotes[Math.floor(Math.random() * jsonData.quotes.length)];
    res.json(randomQuote);
});

app.listen(PORT, () => {
    console.log("Server is running on port: ",PORT);
});