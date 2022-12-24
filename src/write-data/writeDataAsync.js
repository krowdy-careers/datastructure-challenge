const { writeFile } = require("fs/promises");

module.exports = function writeDataAsync(path, data) {
  writeFile(path, data)
    .then((m) => console.log(m))
    .catch((err) => console.log(err));
};
