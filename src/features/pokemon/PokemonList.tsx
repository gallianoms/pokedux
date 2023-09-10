import { useSelector } from 'react-redux'
import Card from '../../components/Card'
import { selectSearch, selectSearchList } from './pokemonSlice'
import { Pokemon } from '../../interfaces/pokemon'

interface PokemonListProps {
  pokemons: Pokemon[]
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  const searchList: Pokemon[] | [] = useSelector(selectSearchList)
  const search = useSelector(selectSearch)

  if (search.length > 0 && searchList.length === 0) {
    return (
      <p className='flex justify-center mt-8 text-sm'>
        Not pokemons founded...
      </p>
    )
  }

  if (search.length > 0) {
    return (
      <div className='border flex justify-center'>
        <div className='grid grid-cols-3 gap-3'>
          {searchList.map(pokemon => (
            <Card key={pokemon.name} name={pokemon.name} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='border flex justify-center'>
      <div className='grid grid-cols-3 gap-3'>
        {pokemons.map(pokemon => (
          <Card key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  )
}

export default PokemonList
