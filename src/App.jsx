import React from 'react'
import './less/App.less'
import bg from './bg.jpg'
import Header from './components/Header'
import Dock from './components/Dock'
import RightMenu from './components/RightMenu'

globalThis.array = [
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
		<div className="App coverScreen lightMode">
			<Header />
			<RightMenu menus={menus} />
			<Dock />
			<img src={bg} alt="background" className="coverScreen" />
		</div>
	);
}

export default App

