import React from 'react'
import Header from 'src/Components/Header'
import Dock from 'src/Components/Dock'
import ContextMenu from 'src/Components/ContextMenu'
import DesktopSettings from 'src/Components/DesktopSettings'
import { contextMenu } from 'react-contexify'
import wallpaper from 'images/wallpaper.png'
import styles from 'styles/App.module.scss'

import customConfig from 'src/custom.config'

const MENU_ID = customConfig.contextMenu.id

const App: React.FC = () => {
    document.title = 'AdonS'

    return (
        <>
            <div
                onContextMenu={e => contextMenu.show({ id: MENU_ID, event: e })}
            >
                <Header />
                <DesktopSettings />
                <img
                    className={styles.bg}
                    src={
                        !!localStorage.getItem('background') === false
                            ? wallpaper
                            : localStorage.getItem('background')?.toString()
                    }
                    alt=''
                />
                <Dock />
            </div>
            <ContextMenu />
        </>
    )
}

export default App
