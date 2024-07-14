import { useState } from 'react';
import { pokemonType } from '../../interfaces/interface';
import { DetailCard } from '../Detail/Detail';
import './Cards.css';

export default function Cards({ pokemonData }: { pokemonData: pokemonType[] }) {
  const [selectedPokemon, setSelectedPokemon] = useState<pokemonType | null>(
    null
  );

  const handleCardClick = (pokemon: pokemonType) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      {pokemonData && pokemonData.length > 0 ? (
        <div className="container-cards">
          {pokemonData.map((pokemon: pokemonType) => (
            <div
              key={pokemon.id}
              className="container-card"
              onClick={() => handleCardClick(pokemon)}
            >
              <h2>Name: {pokemon.name}</h2>
              <div className="container-img_card">
                <img
                  src={pokemon.images.small}
                  alt="pokemon-img"
                />
              </div>
              {pokemon.flavorText ? (
                <h3 style={{ fontSize: '18px' }}>
                  Description: {pokemon.flavorText}
                </h3>
              ) : (
                <h3>Description is absent</h3>
              )}
            </div>
          ))}
          {selectedPokemon && <DetailCard data={selectedPokemon} />}
        </div>
      ) : pokemonData.length === 0 ? (
        <p className="error-info">Not found...</p>
      ) : (
        <p className="error-info">Loading data...</p>
      )}
    </>
  );
}
