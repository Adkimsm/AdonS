import React from 'react'

const electronStore = require('electron-store')
const store = new electronStore()

let plugins = store.get("plugins") ?? globalThis.plugins ?? []

export default function () {
    return (
        <>
            {plugins?.map((plugin, index) => {
                return <script src={plugin} key={index} />
            })}
        </>
    )
}
