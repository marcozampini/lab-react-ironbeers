import React from 'react'
import { useParams } from 'react-router-dom'
import './Beer.css'

const Beer = (props) => {
  let { beerId } = useParams()

  const beer = props.beers.find((oneBeer) => oneBeer._id === beerId)
  if (beer === undefined) {
    return (
      <>
        <h1>404</h1>
        <p>The beer code is not correct.</p>
      </>
    )
  }
  console.log(beer)
  return (
    <div className="beer-details">
      <picture>
        <img src={beer.image_url} alt={beer.name} />
      </picture>
      <h1>{beer.name}</h1>
      <div className="beer-details-description">
        <p className="tagline">{beer.tagline}</p>
        <p className="first-brewed">{beer.first_brewed}</p>
        <p className="attenuation-level">{beer.attenuation_level}</p>
        <p className="description">{beer.description}</p>
        <p className="contributed-by">{beer.contributed_by}</p>
      </div>
    </div>
  )
}

export default Beer
