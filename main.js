const { error } = require("console");

//fetch
let contenedor=document.querySelector(".contenedor");

let pokemnon=prompt("Ingrese el numero de pokemon")


fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}')
.then(response => response.json())
.then(data => contenedor.innerHTML=`
<h2>${data.name}</h2>
<img src="${data.sprites.other.dream_world.front_default}">

'
)
.catch(error=>console.log("Error en la peticion:",error)) 
