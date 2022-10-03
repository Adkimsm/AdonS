import React, { useState } from 'react'
import Header from "@/Components/Header";
import styles from 'styles/app.module.scss'
import Dock from '@/Components/Dock'

const App: React.FC = () => {
    document.title = 'AdonS'
    const [count, setCount] = useState(0)

    return (
        <>
          <Header />
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
          <Dock />
        </>
    )
}

export default App
