import React, { useState, useEffect } from 'react'

function RightMenu({ menus, show, op, left, top }) {
    return (
        <div
            className='rightMenu'
            style={{
                display: show,
                opacity: op,
                left: left,
                top: top,
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
