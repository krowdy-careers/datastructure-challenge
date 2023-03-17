var DatosInput =require("./input.json");

var jsonInput = Object.entries(DatosInput);
var jsonChild = Object.entries(jsonInput[0][1]); //child cities

var outputFinal = [];

const buscarWeather = (dato) => {
    return outputFinal.find(x=>x.weather.id == dato) 
}
const getIndexWeather = (dato,index) => {
    return outputFinal.findIndex(x=>{
        if (x.weather.id == dato)
        {
            return true
        }   
    }) 
}

jsonChild.forEach(x=>{
    let city = x[1];
    let idWeather = x[1].weather[0].id;

    if(!buscarWeather(idWeather)){ //si no encuentra nada -> agrega al array y añade ciudad a cities 
        outputFinal.push({"weather": x[1].weather[0],"cities": []})
        let index = getIndexWeather(city.weather[0].id);
        delete city.weather;
        outputFinal[index].cities.push(city) 
    }else{//si existiese el weather buscado en el array outputFinal -> agrega ciudad al array cities
        let index = getIndexWeather(city.weather[0].id);
        delete city.weather;
        outputFinal[index].cities.push(city) 
    }     
});

console.log(outputFinal)
//console.log(outputFinal[0].cities);

//node app.js



