const { createReadStream, createWriteStream, renameSync } = require("fs");
const { chain } = require("stream-chain");
const { parser } = require("stream-json");
const { streamArray } = require("stream-json/streamers/StreamArray");

module.exports = async function processCityStream(city, output_file) {
  const { weather: weatherList, ...restCity } = city;
  const weather = weatherList[0] || null;
  if (!weather) return;

  //Buscar clima in outputData.
  let weatherFound = false;
  const auxStream = createWriteStream("aux_file");
  auxStream.write("[");
  const outputStream = chain([
    createReadStream(output_file),
    parser(),
    streamArray(),
    ({ value }) => {
      if (!value) {
        if (!weatherFound) {
          const itemString = JSON.stringify({ weather, cities: [restCity] });
          return itemString + ", null]";
        }
        return "null]";
      }
      if (value.weather.id === weather.id) {
        weatherFound = true;
        console.log("OUTPUT weather Found", value.weather.description);
        value.cities.push(restCity);
        return JSON.stringify(value) + ",";
      }
      return JSON.stringify(value) + ",";
    },
    auxStream,
  ]);

  await new Promise((resolve) =>
    outputStream.on("end", async () => {
      //copy aux_file into output_file.
      renameSync("aux_file", output_file);
      console.log("End Promise");
      resolve();
    })
  );

  console.log("END INPUT CHUNK");
};
