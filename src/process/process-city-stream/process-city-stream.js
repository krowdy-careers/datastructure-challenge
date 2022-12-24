const { createReadStream, createWriteStream, renameSync } = require("fs");
const { chain } = require("stream-chain");
const { parser } = require("stream-json");
const { streamArray } = require("stream-json/streamers/StreamArray");

const AUX_PATH = "data/output-data/aux_data.json";

module.exports = async function processCityStream(city, output_file) {
  const { weather: weatherList, ...restCity } = city;
  const weather = weatherList[0] || null;
  if (!weather) return;

  //Crear readStream que escanee outputData
  let weatherFound = false;
  const auxStream = createWriteStream(AUX_PATH);
  auxStream.write("[");
  const outputStream = chain([
    createReadStream(output_file),
    parser(),
    streamArray(),
    ({ value }) => {
      //Ultimo elemento (null), si no hubo coindicencia, añadir nuevo clima.
      if (value === null) {
        if (!weatherFound) {
          const itemString = JSON.stringify({ weather, cities: [restCity] });
          return itemString + ", null]";
        }
        return "null]";
      }
      //Si hay coincidencia, añadir ciudad.
      if (value.weather.id === weather.id) {
        weatherFound = true;
        value.cities.push(restCity);
        return JSON.stringify(value) + ",";
      }
      return JSON.stringify(value) + ",";
    },
    auxStream,
  ]);

  //Esperar que se termine de escanear outputData
  await new Promise((resolve) =>
    outputStream.on("end", async () => {
      renameSync(AUX_PATH, output_file);
      resolve();
    })
  );
};
