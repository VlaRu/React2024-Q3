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
  pokemonData: pokemonType[];
}

export interface DataFetchingProps {
  query: string;
}
