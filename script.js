let jsonObject= require('./input.json'); 
const groupByWeather = (cities) => {
  const result = {};
  cities.forEach(city => {
    const weatherId = city.weather[0].id;
    if (!result[weatherId]) {
      result[weatherId] = {
        weather: city.weather[0],
        cities: []
      };
    }
    delete city.weather;
    result[weatherId].cities.push(city);
  });
  return Object.values(result);
};
const sortByWeather = (a, b) => {
  if (a.weather.id < b.weather.id) {
    return -1;
  }
  if (a.weather.id > b.weather.id) {
    return 1;
  }
  return 0;
};

const sortByCityName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

const sortedCities = groupByWeather(jsonObject.cities)
  .sort(sortByWeather)
  .map(weatherGroup => ({
    weather: weatherGroup.weather,
    cities: weatherGroup.cities.sort(sortByCityName)
  }));


const fs = require('fs');

const resultJSON = JSON.stringify(sortedCities, null, 2);

fs.writeFile('output.json', resultJSON, err => {
  if (err) {
    console.error('Error al escribir el archivo de salida:', err);
  } else {
    console.log('El archivo de salida se ha guardado correctamente.');
  }
});