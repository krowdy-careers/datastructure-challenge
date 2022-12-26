
let data = require('./input.json');
var dictionary = new Map();
let lista_final = [];
 
fs_aux = require('fs')

function findWeatherIds(list){
    for(dato of list){
        id_weather = dato["weather"][0]["id"]
        weather = dato["weather"]
        dictionary.set(id_weather, weather )
        
    }
}

findWeatherIds(data["cities"])

console.log("Diccionario de IDs")
console.log(dictionary)

// recorremos los keys para poder armar la lista
keys_d = dictionary.keys()

for(value of dictionary){
    console.log(value[0])
    //filtramos las ciudades con cierta id de clima
    cities_temp = data["cities"].filter( 
        function(dato){
            if(dato["weather"][0]["id"] == value[0]){
                return data
            }
    }
    )

    // armamos el objeto
    dict_temp = {"water": value[1], "cities": cities_temp}
    lista_final.push(dict_temp) 
}

console.log(lista_final)

// Guardando archivo
let data_output = JSON.stringify(lista_final)
console.log(data_output)
console.log(typeof(data_output))

fs_aux.writeFile('./output.json', data_output, (error) => {
    if(error){
        console.log(error)
    }else{
        console.log('JSON guardado')
    }
}
)
