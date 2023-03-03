const fs = require('fs');

const rawData = fs.readFileSync('input.json');
const data = JSON.parse(rawData);

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

const output = Object.values(groupedData);

fs.writeFileSync('output.json', JSON.stringify(output));
