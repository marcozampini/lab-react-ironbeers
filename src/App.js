import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Header />}>
            <Route path="/beers" element={<div>Beers</div>} />
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
