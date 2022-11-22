import { useEffect, useState } from "react";

/**
 * Display a single pokemon
 */
const PokemonImageURL = () => {
    const [ pokemonID, setPokemonID ] = useState(1);
    const [ pokemonData, setPokemonData ] = useState(null);

    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
            const data = await response.json();

            setPokemonData(data);
        };

        getData();
    }, [pokemonID])

    return (
        <div>
            <h1>Pokemon</h1>

            <img src={pokemonData && pokemonData.sprites.front_default} />

            <button
                onClick={() => setPokemonID((oldID) => oldID + 1)}
            >
                Next
            </button>
            
        </div>
    )
};

export default PokemonImageURL;