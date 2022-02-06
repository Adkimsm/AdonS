import React from 'react'
import './App.css'
import bg from './bg.jpg'
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <Header />
      <img src={bg} alt="background" />
    </div>
  )
}

export default App
