import React from 'react'
import Link from './Link'

export const Breeds = () => {
  const [breeds, setBreeds] = React.useState<string[]>([])
  
  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(json => {
        const breeds = Object.keys(json.message)
        setBreeds(breeds)
      })
  }, [])

  return (
    <div>
      <h1>Breeds</h1>
      <ul>
        {breeds.map(breed => (
          <li key={breed}>
            <Link to={`/breed?name=${breed}`}>{breed}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Breeds