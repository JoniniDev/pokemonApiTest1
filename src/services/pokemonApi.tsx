import {Pokemon, PokemonDetails} from '../utils/pokemonInterfaces'

export async function fetchPokemonList(): Promise<Pokemon[]> {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log("Error fetching Pokemon list:", error);
        throw error;
    }
}

export async function fetchPokemonDetails(url: string): Promise<PokemonDetails> {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching Pokemon details:", error);
        throw error;
    }
}