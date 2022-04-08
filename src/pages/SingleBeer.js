import React from 'react'
import { useParams } from 'react-router-dom'
import BeerCardDetails from '../components/BeerCardDetails'
import './SingleBeer.css'

const SingleBeer = (props) => {
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

  return <BeerCardDetails beer={beer} />
}

export default SingleBeer
