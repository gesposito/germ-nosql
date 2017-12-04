const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const basename = path.basename(__filename);
const config = require(process.cwd() + "/database/config.js");

mongoose.connect(`mongodb://${config.host}/${config.database}`);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    require(path.join(__dirname, file))(mongoose);
  });

module.exports = db;
