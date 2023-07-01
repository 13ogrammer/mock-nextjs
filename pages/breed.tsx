import React from 'react'
import Link from '../Link'

export const getData = async (breed: string) => {
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(data => data.message)
}

export const Breed  = ({ initialBreed = "", initialImage="" }: {
  initialBreed?: string
  initialImage?: string
}) => {
  const [breed, setBreed] = React.useState(initialBreed)
  const [image, setImage] = React.useState(initialImage)
  
  React.useEffect(() => {
    const params= new URLSearchParams(window.location.search)
    const breed = params.get('name')

    if(breed){
      setBreed(breed)
      getData(breed).then(setImage)
     }
  }, [])

  return (
    <div>
      <Link to="/breeds">Go Back</Link>
      <h1>{breed}</h1>
      <img src={image} alt={breed} />
    </div>
  )
}

export default Breed

export const gSSP = async ({ query }) => {
  return {
    initialBreed: query.name,
    initialImage: await getData(query.name)
  }
}