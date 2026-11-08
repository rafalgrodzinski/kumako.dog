"use strict";

const express = require("express");
const fs = require("fs");

let app = express();

app.use((req, res) => {
    res.sendFile("index.html")
});

app.listen(8010);