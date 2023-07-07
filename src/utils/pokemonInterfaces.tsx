export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetails {
    name: string;
    height: number;
    weight: number;
    abilities: {
        ability: {
            name: string;
        };
    }[];
}
