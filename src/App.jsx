import React from 'react'
import './App.css'
import bg from './bg.jpg'
import Header from './components/Header'
import Dock from './components/Dock'
import RightMenu from './components/RightMenu'

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

let menus = [{ text: "ddddd", onClick: () => alert('hhhhh')}]

function App() {
  return (
		<div className="App">
			<Header />
			<RightMenu menus={menus} />
			<Dock array={dockItems} />
			<img src={bg} alt="background" />
		</div>
	);
}

export default App

