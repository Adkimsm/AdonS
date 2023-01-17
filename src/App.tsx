import React, { useEffect } from 'react'
import Header from 'src/Components/Header'
import Dock from 'src/Components/Dock'
import ContextMenu from 'src/Components/ContextMenu'
import DesktopSettings from 'src/Components/DesktopSettings'
import BG from './Components/Background'
import { contextMenu } from 'react-contexify'
import 'src/i18n/config'
import customConfig from 'src/custom.config'

const MENU_ID = customConfig.contextMenu.id

const App: React.FC = () => {
    useEffect(() => {
        document.title = 'AdonS'
    }, [])

    return (
        <>
            <div
                onContextMenu={e => contextMenu.show({ id: MENU_ID, event: e })}
            >
                <Header />
                <DesktopSettings />
                <Dock />
                <BG />
            </div>
            <ContextMenu />
        </>
    )
}

export default App
