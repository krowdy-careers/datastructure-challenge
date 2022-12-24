import { processCity } from "./process/process-city/process-city.js";
import { processJSONAsync } from "./process/process-JSON-async/process-JSON-async.js";

const INPUT_PATH = "./data/input-data/input.json";
const OUTPUT_PATH = "./data/output-data/new-output.json";

processJSONAsync(INPUT_PATH, OUTPUT_PATH, processCity);
