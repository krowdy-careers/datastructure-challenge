import information from "./fetch.js";
const data = await information();
const main = document.querySelector(".container_card");
const btn = document.querySelector("button");

data.cities.forEach(city =>{
    main.appendChild(dashboard(city));
});

function card(city){
    return  document.createRange().createContextualFragment(
        `<article class="container_card">
            <div class="card">
                <h4>${city.name}</h4>
                <label class="card_temp-min">Temperatura mínima</label>
                    <p>${city.main.temp_min}</p>
                <label class="card_temp-max">Temperatura máxima</label>
                    <p>${city.main.temp_max}</p>
                <label class="card_temp-max">Humedad</label>
                    <p>${city.main.humidity}</p>
                <label class="card_temp-max">Descripción</label>
                    <p>${city.weather.map(x => x.description)}</p>
            </div>
        </article>
    `);
}

function dashboard(city){
    return card(city)
}

btn.addEventListener("click", function (){
    const value = document.getElementById('min').value;
    const selection = data.cities.filter(city => city.main.temp_min == value)
    console.log(selection)
    if(selection.length > 0){
    const element = document.querySelector(".container_card")
    element.remove(element);
    selection.forEach(city =>{
        const createMain = document.createElement("main");
        createMain.classList.add("container_card");
            document.body.appendChild(createMain)
        const updateMain= document.querySelector("main");
            updateMain.appendChild(card(city));
    });
    }
})

