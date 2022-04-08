import React from 'react'

const Beers = (props) => {
  return (
    <>
      <h1>Beers</h1>
      <ul>
        {props.beers.map((beer) => (
          <li>
            {beer.image} - {beer.name} - {beer.tagline} - Created by:{' '}
            {beer.contributed_by}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Beers
