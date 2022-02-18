import React from 'react'
function Header() {
    const shutdown = () => window.close()
    return (
        <header className='dragMoveWindowHeader'>
            Easier
            <button onClick={ shutdown }>×</button>
            <span>退出</span>
        </header>
    )
}

export default Header
