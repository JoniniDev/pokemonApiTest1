import React, { useState, useEffect } from "react";
import { fetchPokemonList, fetchPokemonDetails } from "./services/pokemonApi";
import { Pokemon, PokemonDetails } from './utils/pokemonInterfaces'
import styled from 'styled-components'

const App: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    try {
      const data = await fetchPokemonList();
      setPokemonList(data);
    } catch (error) {
      console.log("Error fetching Pokemon data:", error);
    }
  };

  const handlePokemonClick = async (url: string) => {
    try {
      const data = await fetchPokemonDetails(url);
      setSelectedPokemon(data);
    } catch (error) {
      console.log("Error fetching Pokemon details:", error);
    }
  };

  return (
    <Wrapper>
      <Title>Pokemon List</Title>
      <List>
        {pokemonList.map((pokemon, index) => (
          <ListItem key={index}>
            <Button onClick={() => handlePokemonClick(pokemon.url)}>
              {pokemon.name}
            </Button>
          </ListItem>
        ))}
      </List>

      {selectedPokemon && (
        <Details>
          <h2>{selectedPokemon.name}</h2>
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight}</p>
          <p>Abilities:</p>
          <ul>
            {selectedPokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </Details>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-size: 30px;
    text-decoration: underline;
`

const List = styled.ul`
    padding: 10px;
`

const ListItem = styled.li`
    list-style: none;
`

const Button = styled.button`
    padding: 6px 10px;
    margin: 2px;
    width: 100%;
    max-width: 100px;
`

const Details = styled.div`
    border-radius: 5px;
    background: #af1d1d;
    padding: 2px 20px;
    width: max-content;
    min-width: 250px;
`

export default App;