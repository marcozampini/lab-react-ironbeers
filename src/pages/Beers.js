import React from 'react'
import BeerCardItem from '../components/BeerCardItem'
import './Beers.css'

const Beers = (props) => {
  return (
    <>
      <h1>Beers</h1>
      <ul className="beers">
        {props.beers.map((beer) => (
          <li key={beer._id}>
            <BeerCardItem beer={beer} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Beers
