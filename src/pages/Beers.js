import React from 'react'
import { Link } from 'react-router-dom'
import './Beers.css'

const Beers = (props) => {
  return (
    <>
      <h1>Beers</h1>
      <ul className="beers">
        {props.beers.map((beer) => (
          <li className="beer" key={beer._id}>
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
          </li>
        ))}
      </ul>
    </>
  )
}

export default Beers
