import React from 'react'
import './App.css'
import bg from './bg.jpg'
import Header from './components/Header'
import Dock from './components/Dock'

let dockItems = [
	{
		onClick: () => {
			alert("hel");
		},
		src: "/src/bg.jpg",
	},
	{
		onClick: () => {
			alert("hel");
		},
		src: "/src/bg.jpg",
	},
	,
	{
		onClick: () => {
			alert("hel");
		},
		src: "/src/bg.jpg",
	},
	,
	{
		onClick: () => {
			alert("hel");
		},
		src: "/src/bg.jpg",
	},
	,
	{
		onClick: () => {
			alert("hel");
		},
		src: "/src/bg.jpg",
	},
];

function App() {
  return (
    <div className="App">
      <Header />
      <Dock array={dockItems} />
      <img src={bg} alt="background" />
    </div>
  )
}

export default App

