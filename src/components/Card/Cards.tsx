import { useState } from 'react';
import { pokemonType } from '../../interfaces/interface';
import { DetailCard } from '../Detail/Detail';
import './Cards.css';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { URL_DEFAULT_LIST } from '../../utils/variables';

export default function Cards({ pokemonData }: { pokemonData: pokemonType[] }) {
  const [selectedPokemon, setSelectedPokemon] = useState<pokemonType | null>(
    null
  );
  const [activeDetail, setActiveDetail] = useState(true);

  const handleCardClick = (pokemon: pokemonType) => {
    setSelectedPokemon(pokemon);
    setActiveDetail(true);
  };

  return (
    <>
      {pokemonData && pokemonData.length > 0 ? (
        <div className="container-cards">
          {pokemonData.map((pokemon: pokemonType) => (
            <Link to={`product/${pokemon.id}${URL_DEFAULT_LIST}`}>
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
            </Link>
          ))}
          {selectedPokemon && (
            <DetailCard
              data={selectedPokemon}
              activeDetail={activeDetail}
              setActiveDetail={setActiveDetail}
            />
          )}
        </div>
      ) : pokemonData.length === 0 ? (
        <p className="error-info">Not found...</p>
      ) : (
        <p className="error-info">
          Loading data...
          <Loading />
        </p>
      )}
    </>
  );
}
