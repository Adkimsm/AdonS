import React, { useState } from 'react'

const formatDate = str =>
    str.replace(/(?<=\/|-|\.|:|\b|T)\d{1}(?=\/|-|\.|:|\b|T)/gu, function ($1) {
        return '0' + $1
    })

function Dock() {
    let array = globalThis.array
    let dateObj = new Date()
    let dateHour = dateObj.getHours()
    let amOrPm = dateHour > 12 ? 'PM' : 'AM'
    dateHour = dateHour > 12 ? dateObj.getHours() - 12 : dateObj.getHours()
    dateHour = dateHour < 10 ? '0' + dateHour : dateHour
    let dateMinute = dateObj.getMinutes()
    dateMinute = dateMinute < 10 ? '0' + dateMinute : dateMinute
    let [dateString, setDate] = useState(
        `${dateHour} : ${dateMinute} ${amOrPm}`
    )
    let [scrollLeft, setScrollLeft] = useState(0)
    setInterval(() => {
        setDate(
            formatDate(
                `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
            )
        )
    }, 500)
    return (
        <div
            className='dock'
            onWheel={event => {
                if (
                    (scrollLeft += event.deltaY) >
                    window
                        .getComputedStyle(document.body)
                        .width.replace(/px/, '')
                        .valueOf()
                ) {
                    alert('滚动范围超出')
                    setScrollLeft(0)
                } else if ((scrollLeft += event.deltaY) < 0) {
                    alert('滚动范围超出')
                    setScrollLeft(0)
                } else {
                    setScrollLeft((scrollLeft += event.deltaY))
                }
            }}
        >
            <div
                className='dockIcons flex xCenter'
                style={{ left: scrollLeft }}
            >
                {array.map((item, index) => (
                    <div
                        key={index}
                        className='dockItem'
                        onClick={item.onClick}
                    >
                        <img alt={item.name} src={item.src} />
                    </div>
                ))}
            </div>
            <div className='trayOrTimes'>
                <span className='dockTime'>{dateString}</span>
            </div>
        </div>
    )
}

export default Dock
