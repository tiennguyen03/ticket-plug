import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Orders from './pages/Orders';
import FAQ from './pages/FAQ';
import Navbar from './assets/components/Navbar'
import './App.css'

function App() {
  return (
    <> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
