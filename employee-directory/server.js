const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static("build"));

app.listen(PORT, function() {
    console.log("App is running on port: " + PORT);
});