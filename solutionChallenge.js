const fs = require('fs');

// Leer el archivo de entrada y parsear los datos JSON
const data = JSON.parse(fs.readFileSync('./input.json'));

// Agrupar las ciudades por similitud climática en un objeto
const dataTogether = {};
data.cities.forEach((city) => {
  const weatherKey = `${city.weather.main}_${city.weather.description}`;
  // Si no existe la clave, crearla y agregar el objeto de clima y un arreglo vacío para las ciudades
  // que comparten el mismo clima, Si ya existe la clave, solo agregar la ciudad al arreglo de ciudades que comparten el mismo clima
  
  if (!dataTogether[weatherKey]) {
    dataTogether[weatherKey] = {
      weather: city.weather,
      cities: [],
    };
  }
  dataTogether[weatherKey].cities.push(city);
});

// Escribir el objeto de salida en un archivo JSON
fs.writeFile('output.json', JSON.stringify(Object.values(dataTogether)), (err) => {
  if (err) throw err;
  console.log('Archivo generado exitosamente.');
});