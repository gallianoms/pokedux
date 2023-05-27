import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'
import counterSlice from '../features/counter/counterSlice'
import pokemonSlice from '../features/pokemon/pokemonSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    pokemon: pokemonSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(apiSlice.middleware),
})
