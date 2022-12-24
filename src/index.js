import { newCity } from "./data/mock-data/new-city.js";
import { outputData } from "./data/mock-data/output-data.js";
import { processData } from "./process-data/process-data.js";
import { readDataAsync } from "./read-data/read-data-async.js";

readDataAsync("./data/input-data/input.json").then((data) => {
  console.log(data);
});

/* const processedData = processData(newCity, outputData);
const processedData2 = processData(newCity, processedData);

console.log(processedData2); */
