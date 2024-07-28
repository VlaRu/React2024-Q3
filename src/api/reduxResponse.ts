import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiSearchResponse } from '../interfaces/interface';
import { URL } from '../utils/variables';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<
      ApiSearchResponse,
      { name: string; page: number }
    >({
      query: ({ name, page }) =>
        `?page=${page || 1}&pageSize=8&q=name:${name || '*'}`,
    }),
  }),
});

export const useGetPokemonByNameQuery: (arg: {
  name: string;
  page: number;
}) => ReturnType<typeof pokemonApi.endpoints.getPokemonByName.useQuery> =
  pokemonApi.endpoints.getPokemonByName.useQuery;
