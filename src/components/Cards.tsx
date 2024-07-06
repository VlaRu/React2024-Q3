import { Component } from 'react';

export type pokemonType = {
  name: string;
  id: string;
  flavorText: string;
  images: {
    small?: string;
    large?: string;
  };
};

export interface CreateCardsProps {
  data: pokemonType[];
}

export default class CreateCards extends Component<CreateCardsProps> {
  render() {
    const { data } = this.props;

    return (
      <>
        <h1>Pokémon Data</h1>
        {data.length > 0 ? (
          <div className="container-cards">
            {data.map((pokemon: pokemonType) => (
              <div
                key={pokemon.id}
                className="container-card"
              >
                <h2>Name: {pokemon.name}</h2>
                <h3>Description: {pokemon.flavorText}</h3>
                <div className="container-img_card">
                  <img
                    src={pokemon.images.small}
                    alt="pokemon-img"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </>
    );
  }
}
