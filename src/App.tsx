import React from 'react'
import Header from 'src/Components/Header'
import Dock from 'src/Components/Dock'
import ContextMenu from 'src/Components/ContextMenu'
import DesktopSettings from 'src/Components/DesktopSettings'
import { contextMenu } from 'react-contexify'
import wallpaper from 'images/wallpaper.png'
import styles from 'styles/App.module.scss'
import storage from 'src/utils/functions/storage'
import 'src/i18n/config';
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
                        !!storage.getItem('background') === false
                            ? wallpaper
                            : storage.getItem('background')?.toString()
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
