import React, { useEffect, useState } from 'react'
import { Menu, Item, useContextMenu } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.css'
import styles from 'styles/components/header.module.scss'
import logo from 'images/logo.png'
import customConfig from 'src/custom.config'
import menuStyle from 'styles/components/menu.module.scss'
import storage from 'src/utils/functions/storage'

const MENU_ID = 'logoMenu'
const { show } = useContextMenu({
    id: MENU_ID,
})

const getTime = () => {
    const date = new Date(),
        hours = date.getHours(),
        mins = date.getMinutes()
    return `${hours >= 10 ? hours : '0' + hours.toString()}:${
        mins >= 10 ? mins : '0' + mins.toString()
    }`
}

const App: React.FC = () => {
    const [time, setTime] = useState(getTime())

    useEffect(() => {
        let timeout = setInterval(() => setTime(getTime()), 1000 * 30)
        return () => {
            clearInterval(timeout)
        }
    })

    return (
        <>
            <header
                className={styles.globalHeader}
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
                <span
                    className={styles.logo}
                    onClick={e =>
                        show({
                            event: e,
                        })
                    }
                >
                    <img src={logo} alt='' />
                </span>
                <span>Easier</span>
                <span className={styles.time}>{time}</span>
            </header>

            <Menu
                id={MENU_ID}
                className={menuStyle.contexify}
                animation='flip'
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
                {customConfig.logoMenu.map((menuItem, i) => {
                    return (
                        <Item onClick={menuItem.action} key={i}>
                            {menuItem.text}
                        </Item>
                    )
                })}
            </Menu>
        </>
    )
}

export default App
