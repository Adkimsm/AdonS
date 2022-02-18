import React from 'react'

export default function () {
    return (
        <>
            {globalThis.plugins?.map((plugin, index) => {
                return <script src={plugin} key={index} />
            })}
        </>
    )
}
