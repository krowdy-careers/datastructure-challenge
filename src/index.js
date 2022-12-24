//const processCity = require("./process/process-city/process-city");
//const processJSONAsync = require("./process/process-JSON-async/process-JSON-async");

const processJSONStream = require("./process/process-JSON-stream/process-JSON-stream");

const INPUT_PATH = "./data/input-data/input.json";
const OUTPUT_PATH = "./data/output-data/new-output.json";

//processJSONAsync(INPUT_PATH, OUTPUT_PATH, processCity);

processJSONStream(INPUT_PATH, OUTPUT_PATH, (city, path) => {
  //transform city and include in output
  console.log("PROCESSING", city.name, path);
});
