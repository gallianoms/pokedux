import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    favorites: [],
    search: '',
    searchList: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
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
    searchPokemon: (state, action) => {
      const { searchValue, pokemons } = action.payload
      state.search = searchValue

      state.searchList = pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      })
    },
  },
})

export const { toggleFavorite, searchPokemon } = pokemonSlice.actions

export const selectPokemon = state => state.pokemon.favorites

export const selectSearch = state => state.pokemon.search
export const selectSearchList = state => state.pokemon.searchList

export default pokemonSlice.reducer
