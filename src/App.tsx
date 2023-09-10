import './App.css'
import { useGetPokemonQuery } from './api/apiSlice'
import PokemonList from './features/pokemon/PokemonList'
import Search from './components/Search'

function App() {
  const { data, error, isLoading, isFetching, isError } =
    useGetPokemonQuery(null)

  if (isLoading || isFetching)
    return (
      <div className='flex justify-center items-center h-screen'>
        <div
          aria-label='Loading...'
          role='status'
          className='flex items-center space-x-2'
        >
          <svg
            className='h-6 w-6 animate-spin stroke-gray-500'
            viewBox='0 0 256 256'
          >
            <line
              x1='128'
              y1='32'
              x2='128'
              y2='64'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='195.9'
              y1='60.1'
              x2='173.3'
              y2='82.7'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='224'
              y1='128'
              x2='192'
              y2='128'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='195.9'
              y1='195.9'
              x2='173.3'
              y2='173.3'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='128'
              y1='224'
              x2='128'
              y2='192'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='60.1'
              y1='195.9'
              x2='82.7'
              y2='173.3'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='32'
              y1='128'
              x2='64'
              y2='128'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
            <line
              x1='60.1'
              y1='60.1'
              x2='82.7'
              y2='82.7'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></line>
          </svg>
          <span className='text-xs font-medium text-gray-500'>Loading...</span>
        </div>
      </div>
    )

  if (isError) return <h2>{error.toString()}</h2>

  return (
    <div className='App'>
      <div className='flex justify-center mt-4'>
        <img className='w-32' src='logo.svg' alt='' />
      </div>
      <Search pokemons={data.results} />
      <PokemonList pokemons={data.results} />
    </div>
  )
}

export default App
