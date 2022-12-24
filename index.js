import fs from 'fs/promises'

const groupedCities = {}

const groupCities = async () => {
  const json = await fs.readFile('./input.json')
  const { cities } = JSON.parse(json)
  cities.forEach((city) => {
    const { id, name, coord, main, dt, wind, clouds, weather } = city

    const groupedCity = {
      id,
      name,
      coord,
      main,
      dt,
      wind,
      clouds
    }

    if (groupedCities.hasOwnProperty(weather[0].id)) {
      groupedCities[weather[0].id].cities.push(groupedCity)
      return
    }
    groupedCities[weather[0].id] = {
      weather: weather[0],
      cities: [groupedCity]
    }
  })

  fs.writeFile('./output.json', JSON.stringify(Object.values(groupedCities)))
}

groupCities()
