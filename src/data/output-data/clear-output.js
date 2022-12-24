const { writeFile } = require("fs");

module.exports = function clearOutput(path) {
  writeFile(path, "[null]", (data, err) => console.log("ERR", err));
};
