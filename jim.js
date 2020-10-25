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
