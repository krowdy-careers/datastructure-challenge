const fs = require('fs');

// Leemos el archivo de entrada
const rawData = fs.readFileSync('input.json');
const data = JSON.parse(rawData);

// Procesamos los datos y agrupamos las ciudades por clima similar
const groupedData = data.cities.reduce((acc, city) => {
    const weather = city.weather;
    const key = `${weather.main}_${weather.description}`;

    if (!acc[key]) {
        acc[key] = {
            weather: weather,
            cities: []
        };
    }

    acc[key].cities.push(city);

    return acc;
}, {});

// Convertimos el objeto en un array para tener el formato deseado
const output = Object.values(groupedData);

// Escribimos el resultado en un archivo de salida en formato JSON
fs.writeFileSync('output.json', JSON.stringify(output));
