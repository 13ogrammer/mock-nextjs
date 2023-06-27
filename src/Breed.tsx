import React from 'react'
import Link from './Link'

export const Breed  = () => {
  const [breed, setBreed] = React.useState<string>()
  const [image, setImage] = React.useState()
  const [loading, setLoading] = React.useState(false)
  
  React.useEffect(() => {
    setLoading(true)
    const params= new URLSearchParams(window.location.search)
    const breed = params.get('name')

    if(breed){
      setBreed(breed)
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(data => {
          setImage(data.message)
          setLoading(false)
        })
        .catch((e) => {
          console.error(e)
        })
     }
  }, [])

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link to="/">Go Back</Link>
      <h1>{breed}</h1>
      <img src={image} alt={breed} />
    </div>
  )
}

export default Breed