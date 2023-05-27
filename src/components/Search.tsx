import { useDispatch } from 'react-redux'
import { searchPokemon } from '../features/pokemon/pokemonSlice'

const Search = ({ pokemons }) => {
  const dispatch = useDispatch()

  return (
    <div className='flex justify-center mt-3'>
      <input
        onChange={e =>
          dispatch(searchPokemon({ searchValue: e.target.value, pokemons }))
        }
        className='border w-44 py-1 rounded-sm pl-2'
        placeholder='Search...'
      />
    </div>
  )
}

export default Search
