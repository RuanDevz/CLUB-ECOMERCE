import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
