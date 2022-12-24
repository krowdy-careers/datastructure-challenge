const INPUT_PATH = "./data/input-data/input.json";
const OUTPUT_PATH = "./data/output-data/output-stream.json";
/* const processCity = require("./process/process-city/process-city");
const processJSONAsync = require("./process/process-JSON-async/process-JSON-async");
//processJSONAsync(INPUT_PATH, OUTPUT_PATH, processCity);

 */
const processCityDb = require("./process/process-city-db/process-city-db");
const processJSONStream = require("./process/process-JSON-stream/process-JSON-stream");

processJSONStream(INPUT_PATH, OUTPUT_PATH, processCityDb);
