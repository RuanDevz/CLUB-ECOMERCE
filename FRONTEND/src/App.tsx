import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Explorer from './pages/Explorer/Explorer'
import Chapeus from './pages/CategoryProducts/hats/hats'
import Jaquetas from './pages/CategoryProducts/jackets/jackets'
import Feminino from './pages/CategoryProducts/female/female'
import Masculino from './pages/CategoryProducts/male/male'
import Tenis from './pages/CategoryProducts/sneakers/sneakers'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/explorer' element={<Explorer/>}/>
        <Route path='/hats' element={<Chapeus/>}/>
        <Route path='/sneakers' element={<Tenis/>}/>
        <Route path='/jackets' element={<Jaquetas/>}/>
        <Route path='/male' element={<Masculino/>}/>
        <Route path='/female' element={<Feminino/>}/>
      </Routes>
    </Router>
  )
}

export default App
