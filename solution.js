// Importamos la biblioteca fs de Node.js para poder leer y escribir archivos
const fs = require('fs');

// Leemos los datos del archivo input.json y los almacenamos en la variable data
const data = JSON.parse(fs.readFileSync('input.json'));

// Creamos un objeto vacío para almacenar los datos agrupados por clima
const groupedData = {};

// Iteramos sobre la lista de ciudades y las agrupamos por clima
for (let i = 0; i < data.cities.length; i++) { //el ciclo se ejecutara hasta que i sea igual al numero de elementos en la lista de ciudades en la const data
  // Obtenemos el clima de la ciudad actual
  const city = data.cities[i];
  const weather = city.weather;

  // Creamos una clave única para el clima de la ciudad actual
  const key = weather.main + '_' + weather.description;

  // Si aún no hemos creado una entrada en groupedData para este clima, la creamos con la estructura solicitada
  if (!groupedData[key]) {
groupedData[key] = {
weather: weather,
cities: []
};
}

// Agregamos la ciudad actual a la lista de ciudades para este clima
groupedData[key].cities.push(city);
}

// Convertimos el objeto groupedData en una lista de objetos
const output = Object.values(groupedData);

// Escribimos los datos agrupados en el archivo output.json
fs.writeFileSync('output.json', JSON.stringify(output));