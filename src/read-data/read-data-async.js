const { readFile } = require("fs/promises");

module.exports = function readDataAsync(path) {
  return readFile(path)
    .then((data) => {
      const dataString = data.toString();
      return JSON.parse(dataString);
    })
    .catch((err) => {
      console.log("Error", err);
      return null;
    });
};
