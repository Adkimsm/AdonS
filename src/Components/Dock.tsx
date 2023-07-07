import React from 'react'
import styles from 'styles/components/dock.module.scss'
import customConfig from 'src/custom.config'
import storage from 'src/utils/functions/storage'

const App: React.FC = () => {
    return (
        <div className={styles.dockCon}>
            <div
                className={styles.dock}
                style={{
                    background:
                        storage.getItem('enableBlur') === 'true'
                            ? 'rgba(255,255,255,0.85)'
                            : '#fff',
                    backdropFilter:
                        storage.getItem('enableBlur') === 'true'
                            ? 'blur(15px)'
                            : 'none',
                }}
            >
                {customConfig.dockIcons.map((icon, i) => {
                    return <img src={icon.src} onClick={icon.action} key={i} />
                })}
            </div>
        </div>
    )
}

export default App
