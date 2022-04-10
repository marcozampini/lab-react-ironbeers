import React,{ useEffect, useState } from 'react'
import BeerCardItem from '../components/BeerCardItem'
import axios from 'axios'
import Loading from './Loading'
import './Beers.css'

const Beers = () => {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    const fetchBeersData = async () => {
      const fetchData = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      )
      fetchData.data.sort((a, b) => a.name.localeCompare(b.name))
      setBeers(fetchData.data)
    }
    fetchBeersData()
  }, [])

  if (beers.length === 0) {
    return (
      <>
        <Loading />
        </>
    )
  }
  return (
    <>
      <h1>Beers</h1>
      <ul className="beers">
        {beers.map((beer) => (
          <li key={beer._id}>
            <BeerCardItem beer={beer} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Beers
