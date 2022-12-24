const fs = require("fs");

const { chain } = require("stream-chain");

const { parser } = require("stream-json");
const { pick } = require("stream-json/filters/Pick");
const { streamArray } = require("stream-json/streamers/StreamArray");

module.exports = function processJSONstream(
  input_path,
  output_path,
  processCB
) {
  const inputStream = chain([
    fs.createReadStream(input_path, { encoding: "utf8" }),
    parser(),
    pick({ filter: "cities" }),
    streamArray(),
    ({ value }) => {
      console.log(value.name);
      processCB(value, output_path);
    },
  ]);

  inputStream.on("error", () => console.log("ERROR"));
};
