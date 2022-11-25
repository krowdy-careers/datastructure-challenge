let myRequest = new Request("./input.json");

let json = fetch(myRequest)
.then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log(data);
})

export default json;