export function processCity(city, outputData) {
  const { weather: weatherList, ...restCity } = city;
  const weather = weatherList[0] || null;
  if (!weather) return outputData;
  //Buscar clima in outputData.
  const indexFound = outputData.findIndex(
    (item) => item.weather.id === weather.id
  );
  //Si se encuentra clima, añadir ciudad. En caso contrario crear nuevo elemento.
  if (indexFound >= 0) {
    outputData[indexFound].cities.push(restCity);
    return outputData;
  }
  return [...outputData, { weather, cities: [restCity] }];
}
