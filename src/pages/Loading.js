import React from 'react'
import loading from '../assets/loading-beers.gif'
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading">
        <img src={loading} alt="Loading..." />
      </div>
  )
}

export default Loading