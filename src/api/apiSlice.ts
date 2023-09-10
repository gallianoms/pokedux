import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: builder => ({
    getPokemon: builder.query({
      query: () => 'pokemon?limit=20',
      // query: () => 'pokemon?limit=151',
    }),
    getPokemonDetails: builder.query({
      query: ({ name }: { name: string }) => `pokemon/${name}`,
    }),
  }),
})
export const { useGetPokemonQuery, useGetPokemonDetailsQuery } = apiSlice
