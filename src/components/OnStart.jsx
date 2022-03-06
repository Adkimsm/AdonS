import React, { useState, useRef } from 'react'

export default function () {
    let [o, setO] = useState('1')
    let onStartDiv = useRef()
    setTimeout(() => {
        setO('0')
        setTimeout(() => {
            onStartDiv.current?.remove()
        }, 550)
    }, 3690)
    return (
        <div
            className='onStart flex coverScreen xCenter yCenter'
            style={{ opacity: o }}
            ref={onStartDiv}
        >
            <h1>Easier</h1>
        </div>
    )
}
