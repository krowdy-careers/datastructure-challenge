const readDataAsync = require("../../read-data/read-data-async");
const writeDataAsync = require("../../write-data/writeDataAsync.js");

module.exports = async function processJSONAsync(
  input_file,
  output_file,
  process_cb
) {
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
};
