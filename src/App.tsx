import React, { useEffect, useState } from 'react'
import electron from '/electron.png'
import react from '/react.svg'
import vite from '/vite.svg'
import styles from 'styles/app.module.scss'

const getTime = () => {
    const date = new Date(),
        hours = date.getHours(),
        mins = date.getMinutes()
    return `${hours >= 10 ? hours : '0' + hours.toString()}:${
        mins >= 10 ? mins : '0' + mins.toString()
    }`
}

const App: React.FC = () => {
    document.title = 'AdonS'
    const [count, setCount] = useState(0),
        [time, setTime] = useState(getTime()),
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
                    ⭕
                </span>
                <span>Easier</span>
                <span className={styles.time}>{time}</span>
            </header>
            <div
                style={{ opacity, display, transform: `scale(${scale})` }}
                className={styles.menu}
            >
                <div className={styles.menuItem} onClick={() => window.close()}>
                    关机
                </div>
            </div>
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <p>Hello AdonS v4!</p>
                    <p>
                        <button onClick={() => setCount(count => count + 1)}>
                            count is: {count}
                        </button>
                    </p>
                    <p>
                        Edit <code>App.tsx</code> and save to test HMR updates.
                    </p>
                    <div>
                        <a
                            className={styles.appLink}
                            href='https://reactjs.org'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Learn React
                        </a>
                        {' | '}
                        <a
                            className={styles.appLink}
                            href='https://vitejs.dev/guide/features.html'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Vite Docs
                        </a>
                        <div className={styles.staticPublic}>
                            Place static files into the <code>/public</code>{' '}
                            folder
                            <img style={{ width: 77 }} src='./node.png' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
