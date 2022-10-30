import React from 'react'
import electron from '/tauri.svg'
import vite from '/vite.svg'
import styles from 'styles/app.module.scss'

const App: React.FC = () => {
    return (
        <div className={styles.dockCon}>
            <div className={styles.dock}>
                <img src={electron} alt='Electron' />
                <img src={vite} alt='Vite.js' />
            </div>
        </div>
    )
}

export default App
