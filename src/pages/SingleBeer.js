import React,{ useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BeerCardDetails from '../components/BeerCardDetails'
import axios from 'axios'
import './SingleBeer.css'
import Loading from './Loading'

const SingleBeer = () => {
  let { beerId } = useParams()

  const [beer, setBeer] = useState([])

  useEffect(() => {
    const fetchBeerData = async () => {
      const fetchData = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      )
      setBeer(fetchData.data)
    }
    fetchBeerData()
  }, [beerId])

  if (beer.length === 0) {
    return (
      <>
        <Loading />
        </>
    )
  }

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
