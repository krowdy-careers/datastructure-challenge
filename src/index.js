// require('./database')

// require('./server')

const fs = require('fs');

let route = './src/data/';
let rawdata = fs.readFileSync(route + 'input.json');

let citiesJSON = JSON.parse(rawdata);

function groupByWheter(arr, initialPojo = {}) {
  return arr.reduce((pojo, citieData) => {
    const { weather, ...restData } = citieData;
    weather.forEach((singleWeather) => {
      const { id } = singleWeather;
      if (!pojo[id])
        pojo[id] = {
          wheater: singleWeather,
          citites: [],
        };

      pojo[id].citites?.push(restData);
    });

    return pojo;
  }, initialPojo);
}
const result = [groupByWheter(citiesJSON.cities)];
fs.writeFileSync(route + 'output.json', JSON.stringify(result), 'utf-8');
