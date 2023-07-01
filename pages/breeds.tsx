import React from 'react'
import Link from '../Link'

export const getData = () => {
  return fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => {
      return Object.keys(json.message)
    })
}

export const Breeds = ({ initialBreeds = []}) => {
  const [breeds, setBreeds] = React.useState<string[]>(initialBreeds)
  
  React.useEffect(() => {
    getData().then(setBreeds)
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

export const gSSP = async () => {
  return {
    initialBreeds: await getData()
  }
}

