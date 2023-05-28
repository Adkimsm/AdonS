import React, { useEffect, useState } from 'react'
import styles from 'styles/components/header.module.scss'
import logo from 'images/logo.png'
import customConfig from 'src/custom.config'

const getTime = () => {
    const date = new Date(),
        hours = date.getHours(),
        mins = date.getMinutes()
    return `${hours >= 10 ? hours : '0' + hours.toString()}:${
        mins >= 10 ? mins : '0' + mins.toString()
    }`
}

const App: React.FC = () => {
    const [time, setTime] = useState(getTime()),
        [opacity, setOpacity] = useState(0),
        [display, setDisplay] = useState('none'),
        [scale, setScale] = useState(0.5)

    useEffect(() => {
        let timeout = setInterval(() => setTime(getTime()), 1000 * 30)
        return () => {
            clearInterval(timeout)
        }
    })

    return (
        <>
            <header className={styles.globalHeader}>
                <span
                    className={styles.logo}
                    onClick={() => {
                        if (opacity === 1) {
                            setScale(0.5)
                            setOpacity(0)
                            setTimeout(() => setDisplay('none'), 320)
                        } else {
                            setDisplay('block')
                            setTimeout(() => setOpacity(1), 50)
                            setTimeout(() => setScale(1), 100)
                        }
                    }}
                >
                    <img src={logo} alt='' />
                </span>
                <span>Easier</span>
                <span className={styles.time}>{time}</span>
            </header>
            <div
                style={{ opacity, display, transform: `scale(${scale})` }}
                className={styles.menu}
            >
                {customConfig.logoMenu.map((menuItem, i) => {
                    return (
                        <div
                            className={styles.menuItem}
                            onClick={menuItem.action}
                            key={i}
                        >
                            {menuItem.text}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App
