let d = document.getElementById("main");

async function clicked(){
    let response = await fetch("https://fakerapi.it/api/v2/persons?_quantity=10");
    let output = await response.json();
    output.data.forEach(val=>{
        d.insertAdjacentHTML("afterbegin",`<p>${val.firstname+" "+val.lastname}</p>`);
    })
    document.body.appendChild(d);
}