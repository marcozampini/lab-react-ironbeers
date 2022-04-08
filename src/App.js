import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import axios from 'axios'
import { useEffect, useState } from 'react'
import loading from './assets/loading-beers.gif'
import Beers from './pages/Beers'

function App() {
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
      <div className="loading">
        <img src={loading} alt="Loading..." />
      </div>
    )
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Header />}>
            <Route path="/beers" element={<Beers beers={beers} />} />
            <Route path="/random-beer" element={<div>Random Beer</div>} />
            <Route path="/new-beer" element={<div>New Beer</div>} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
