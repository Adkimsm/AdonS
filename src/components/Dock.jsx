import React, { useState } from "react";

const formatDate = (str) =>
	str.replace(/(?<=\/|-|\.|:|\b|T)\d{1}(?=\/|-|\.|:|\b|T)/gu, function ($1) {
		return "0" + $1;
	});

function Dock({array}) {
	let dateObj = new Date();
	let dateHour = dateObj.getHours();
	let amOrPm = dateHour > 12 ? "PM" : "AM";
	dateHour = dateHour > 12 ? dateObj.getHours() - 12 : dateObj.getHours();
	dateHour = dateHour < 10 ? "0" + dateHour : dateHour;
	let dateMinute = dateObj.getMinutes();
	dateMinute = dateMinute < 10 ? "0" + dateMinute : dateMinute;
	let [dateString, setDate] = useState(`${dateHour} : ${dateMinute} ${amOrPm}`);
	setInterval(() => {
		setDate(
			formatDate(
				`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
			)
		);
	}, 500);
	return (
		<div className="dock">
			<div className="dockIcons">
				{array.map((item, index) => (
					<div key={index} className="dockItem" onClick={item.onClick}>
						<img src={ item.src }></img>
					</div>
				)) }
			</div>
			<div className="trayOrTimes">
				<span className="dockTime">{dateString}</span>
			</div>
		</div>
	);
}

export default Dock;
