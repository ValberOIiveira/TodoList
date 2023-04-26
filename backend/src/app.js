const express = require("express");
const app = express();
const port = 3000;
const router = require("./router");

app.use(express.json());
app.use(router);



module.exports = app;