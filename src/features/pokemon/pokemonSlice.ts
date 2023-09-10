import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Pokemon } from '../../interfaces/pokemon'

interface PokemonState {
  favorites: string[]
  search: string
  searchList: Pokemon[]
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    favorites: [],
    search: '',
    searchList: [],
  } as PokemonState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      if (state.favorites.length === 0) {
        state.favorites.push(action.payload)
      } else if (
        state.favorites.length > 0 &&
        state.favorites.find(name => name === action.payload)
      ) {
        state.favorites = [
          ...state.favorites.filter(name => name !== action.payload),
        ]
      } else {
        state.favorites.push(action.payload)
      }
    },
    searchPokemon: (
      state,
      action: PayloadAction<{ searchValue: string; pokemons: Pokemon[] }>
    ) => {
      const { searchValue, pokemons } = action.payload
      state.search = searchValue

      state.searchList = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      })
    },
  },
})

export const { toggleFavorite, searchPokemon } = pokemonSlice.actions

export const selectPokemon = (state: { pokemon: PokemonState }) =>
  state.pokemon.favorites

export const selectSearch = (state: { pokemon: PokemonState }) =>
  state.pokemon.search
export const selectSearchList = (state: { pokemon: PokemonState }) =>
  state.pokemon.searchList

export default pokemonSlice.reducer
