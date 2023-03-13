//! INSTALAMOS LOS MODULOS CORRESPONDIENTES
import fs from 'fs';
import _ from 'lodash'; //* Instalamos el modulo con el siguiente comando: npm install lodash

// leer el archivo input.json
const data = JSON.parse(fs.readFileSync('input.json'));

// Se obtiene los datos de las ciudades
const cities = data.cities;

// Se agrupa las ciudades por el ID del clima
const groupedCities = _.groupBy(cities, (city) => city.weather[0].id);

// Se crea un nuevo objeto para cada grupo de ciudades con el clima correspondiente
const output = [];

_.forEach(groupedCities, (cities, id) => {
    const weather = cities[0].weather[0];
    const cityData = cities.map((city) => _.omit(city, ['weather']));

    output.push({
        weather,
        cities: cityData,
    });
});

// Se escribe la información en el archivo output.json
fs.writeFileSync('output.json', JSON.stringify(output));