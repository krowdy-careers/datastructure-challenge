let myRequest = new Request("./input.json");

async function information(){
    let test = await fetch(myRequest)
    const data = await test.json();
    return data
}

export default information;
