import React from 'react'
import { Tooltip } from "evergreen-ui";

function Header() {
    const shutdown = () => window.close()
    return (
        <header className='dragMoveWindowHeader'>
            Easier
            <Tooltip content="Exit Easier">
                <button onClick={shutdown}>×</button>
            </Tooltip>
        </header>
    )
}

export default Header
