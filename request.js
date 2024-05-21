// Dom 
const inputNumber = document.getElementById('pokemonNumber');
const fetchButton = document.getElementById('fetchButton');
const pokemonContainer = document.getElementById('pokemonContainer');



// Funcion para hacer la solicitud a la PokeApi 
const fetchPokemon = async () => {
    const pokemonNumber = inputNumber.value;

    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}');
        const data = await response.json();

        const pokemonName = data.name;
        const pokemonType = data.types.map(type => type.type.name).join(', ');
        const pokemonHeight = data.pokemonHeight / 10;
        const pokemonWeight = data.weight / 10;
        const pokemonImageUrl = data.sprites.front_default;

        const pokemonCard = 
            <div class="card" >
                <img src="${pokemonImageUrl}" alt="${pokemonName}">
                
                </img>
                <div class="info">
                    <h2>${pokemonName}</h2>
                    <p><strong>Tipo:</strong> ${pokemonType}</p>
                    <p><strong>Altura:</strong> ${pokemonHeight} m</p>
                    <p><stronge>Peso:</stronge> ${pokemonWeight} kg</p>
                </div>

            </div>
    `;

    pokemonContainer.innerHTML = pokemonCard;
  } catch (error) {
      console.error('Error al obtener datos del Pokemon:`, error);
  }
}