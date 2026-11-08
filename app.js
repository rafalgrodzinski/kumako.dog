"use strict";

const path = require("path");
const express = require("express");

let publicDir = path.join(__dirname, "public");
let app = express();
app.use(express.static(publicDir));

app.use((req, res) => {
    res.sendFile("index.html", { root: publicDir })
});

app.listen(8010);