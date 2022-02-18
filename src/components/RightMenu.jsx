import React, { useState, useEffect } from 'react'

function RightMenu({ menus }) {
    let [rightMenuShow, setShow] = useState('block'),
        [rightMenuOp, setMenuOp] = useState(0),
        [rightMenuLeft, setRightMenuLeft] = useState(0),
        [rightMenuTop, setRightMenuTop] = useState(40)

    useEffect(() => {
        document.querySelector('.App').oncontextmenu = event => {
            setShow('block')
            setRightMenuLeft(event.pageX)
            setRightMenuTop(event.pageY)
            setTimeout(() => {
                setMenuOp(1)
            }, 100)
        }
        document.addEventListener('click', () => {
            setRightMenuLeft(0)
            setRightMenuTop(0)
            setMenuOp(0)
            setTimeout(() => {
                setShow('none')
            }, 350)
        })
    }, [])
    return (
        <div
            className='rightMenu'
            style={{
                display: rightMenuShow,
                opacity: rightMenuOp,
                left: rightMenuLeft,
                top: rightMenuTop,
            }}
        >
            {menus.map((menu, index) => (
                <div
                    key={index}
                    className='rightMenuItem'
                    onClick={menu.onClick}
                >
                    <span>{menu.text}</span>
                </div>
            ))}
        </div>
    )
}

export default RightMenu
