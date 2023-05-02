import React from 'react'
import styles from 'styles/components/dock.module.scss'
import customConfig from 'src/custom.config'

const App: React.FC = () => {
    return (
        <div className={styles.dockCon}>
            <div className={styles.dock}>
                {customConfig.dockIcons.map((icon, i) => {
                    return <img src={icon.src} onClick={icon.action} key={i} />
                })}
            </div>
        </div>
    )
}

export default App
