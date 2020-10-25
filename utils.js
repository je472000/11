const fs = require("fs");

// This function reads the current contents of the database
function readFile() {
  let notes = JSON.parse(
    fs.readFileSync("db/db.json", function (err) {
      if (err) {
        throw err;
      }
    }),
  );
  return notes;
}

// This function writes to the database
function writeToDB(data) {
  fs.writeFileSync("./db/db.json", data, function (err) {
    if (err) {
      throw err;
    }
    console.log("Database has been updated");
  });
}

// make these functions accessible for our server
module.exports.readFile = readFile;
module.exports.writeToDB = writeToDB;
