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

export interface ApiSearchResponse {
  data: pokemonType[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
