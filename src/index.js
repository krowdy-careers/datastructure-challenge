const INPUT_PATH = "./data/input-data/input.json";
const OUTPUT_PATH = "./data/output-data/output-stream.json";
const clearOutput = require("./data/output-data/clear-output");
/* const processCity = require("_async/process/process-city/process-city");
const processJSONAsync = require("_async/process/process-JSON-async/process-JSON-async");
//processJSONAsync(INPUT_PATH, OUTPUT_PATH, processCity);

 */
const processCityDb = require("./process/process-city-stream/process-city-stream");
const processJSONStream = require("./process/process-JSON-stream/process-JSON-stream");

clearOutput(OUTPUT_PATH);
processJSONStream(INPUT_PATH, OUTPUT_PATH, processCityDb);
