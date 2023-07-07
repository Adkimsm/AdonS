import React, { useEffect } from 'react'
import Header from 'src/Components/Header'
import Dock from 'src/Components/Dock'
import ContextMenu from 'src/Components/ContextMenu'
import DesktopSettings from 'src/Components/DesktopSettings'
import BG from './Components/Background'
import { contextMenu } from 'react-contexify'
import 'src/i18n/config'
import customConfig from 'src/custom.config'
import store from 'src/globalState'

const MENU_ID = customConfig.contextMenu.id

const App: React.FC = () => {
    const [, reload] = React.useState(0)

    useEffect(() => {
        document.title = 'AdonS'
        store.func.reload = reload
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
