import React from 'react'
function Header() {
    const shutdown = () => window.close()
    return (
        <header className='dragMoveWindowHeader'>
            Easier
            <button onClick={ shutdown }>×</button>
        </header>
    )
}

export default Header
