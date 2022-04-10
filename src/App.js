import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Beers from './pages/Beers'
import SingleBeer from './pages/SingleBeer'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Header />}>
            <Route path="/beers" element={<Beers />} />
            <Route
              path="/beers/:beerId"
              element={<SingleBeer />}
            />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<NewBeer />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
