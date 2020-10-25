//required packages
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
var { uuid } = require("uuidv4");
const utils = require("./utils/utils");
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//joining the html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});
app.get("/api/notes", (req, res) => {
  let rawdata = fs.readFileSync("db/db.json", "utf8");
  let notes = JSON.parse(rawdata);
  res.json(notes);
});
