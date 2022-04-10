import React from 'react'
import BeerCardDetails from '../components/BeerCardDetails'
import './SingleBeer.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from './Loading'

const RandomBeer = () => {
  const [beer, setBeer] = useState([])

  useEffect(() => {
    const fetchBeerData = async () => {
      const fetchData = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      )
      setBeer(fetchData.data)
    }
    fetchBeerData()
  }, [])

  if (beer.length === 0) {
    return (
      <>
        <Loading />
        </>
    )
  }

  return <BeerCardDetails beer={beer} />
}

export default RandomBeer
