import { useEffect, useState } from 'react'
import { Pokemon } from '../interfaces/pokemon'

const useFetch = (url: string) => {
  const [data, setData] = useState<Pokemon[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, error, loading }
}

export default useFetch
