import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/home/Home'
import SearchAboutPoke from './components/searchAboutPoke/SearchAboutPoke'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:pokeName' element={<SearchAboutPoke/>}/>
      </Routes>
    </div>
  )
}

export default App
