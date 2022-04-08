import React from 'react'
import { Link } from 'react-router-dom'

const BeerCardItem = (props) => {
  const beer = props.beer
  return (
    <div className="beer">
      <picture>
        <img src={beer.image_url} alt={beer.name} />
      </picture>
      <div className="beer-info">
        <h2>
          <Link to={'/beers/' + beer._id}>{beer.name}</Link>
        </h2>
        <p className="tagline">{beer.tagline}</p>
        <p className="created-by">Created by: {beer.contributed_by}</p>
      </div>
    </div>
  )
}

export default BeerCardItem
