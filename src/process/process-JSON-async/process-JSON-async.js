import { readDataAsync } from "../../read-data/read-data-async.js";
import { writeDataAsync } from "../../write-data/writeDataAsync.js";

export async function processJSONAsync(input_file, output_file, process_cb) {
  //Leer Input y Output Data
  let currentOutput = [];
  const inputData = await readDataAsync(input_file);
  if (!inputData) return;

  //Procesar data
  const { cities } = inputData;
  cities.forEach((city) => {
    currentOutput = process_cb(city, currentOutput);
  });

  //Guardar output data
  const outputString = JSON.stringify(currentOutput);
  await writeDataAsync(output_file, outputString);
}
