import React, { useEffect, useState } from 'react'
import './less/App.scss'
import bg from './bg.jpg'
import Header from './components/Header'
import Dock from './components/Dock'
import RightMenu from './components/RightMenu'
import OnStart from './components/OnStart'
import Alert from './components/Alert'
import Plugins from './components/Plugins'
import SwalOrigin from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const electronStore = require('electron-store')
import 'sweetalert2/src/sweetalert2.scss'

const MySwal = withReactContent(SwalOrigin)
const store = new electronStore() ?? {
    get() {},
    set() {},
}

globalThis.Swal = MySwal

globalThis.array = [
    {
        onClick: () => {
            alert('hel')
        },
        src: '/src/bg.jpg',
    },
    {
        onClick: () => {
            alert('hel')
        },
        src: '/src/bg.jpg',
    },
    {
        onClick: () => {
            alert('hel')
        },
        src: '/src/bg.jpg',
    },
    {
        onClick: () => {
            alert('hel')
        },
        src: '/src/bg.jpg',
    },
    {
        onClick: () => {
            alert('hel')
        },
        src: '/src/bg.jpg',
    },
]

globalThis.plugins = store.get('plugins') ?? globalThis.plugins ?? []
globalThis.pythonPlugins =
    store.get('pythonPlugins') ?? globalThis.pythonPlugins ?? []

let menus = [
    {
        text: '添加 JavaScript 插件',
        onClick: () => {
            Swal.fire({
                title: '填写插件链接',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off',
                },
                showCancelButton: true,
                confirmButtonText: '添加插件',
                showLoaderOnConfirm: true,
                preConfirm: async url => {
                    if (url) {
                        globalThis.plugins.push(url)
                        store.set('plugins', globalThis.plugins)
                        Swal.fire({
                            title: '完成',
                            text: '插件添加成功，下次启动 Easier 自动生效。',
                            allowOutsideClick: () => !Swal.isLoading(),
                        })
                    } else {
                        Swal.showValidationMessage(`请输入一个 URL`)
                        return false
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            })
        },
    },
    {
        text: '添加 Python 插件',
        onClick: () => {
            Swal.fire({
                title: '填写插件链接',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off',
                },
                showCancelButton: true,
                confirmButtonText: '添加插件',
                showLoaderOnConfirm: true,
                preConfirm: async url => {
                    if (url) {
                        globalThis.pythonPlugins.push(url)
                        store.set('pythonPlugins', globalThis.pythonPlugins)
                        Swal.fire({
                            title: '完成',
                            text: '插件添加成功，下次启动 Easier 自动生效。',
                            allowOutsideClick: () => !Swal.isLoading(),
                        })
                    } else {
                        Swal.showValidationMessage(`请输入一个 URL`)
                        return false
                    }
                },
                allowOutsideClick: () => !Swal.isLoading(),
            })
        },
    },
]

function App() {
    let [rightMenuShow, setShow] = useState('flex'),
        [rightMenuOp, setMenuOp] = useState(0),
        [rightMenuLeft, setRightMenuLeft] = useState(0),
        [rightMenuTop, setRightMenuTop] = useState(40)

    function showRightMenu(event) {
        event.preventDefault()
        setShow('flex')
        setRightMenuLeft(event.pageX)
        setRightMenuTop(event.pageY)
        setTimeout(() => {
            setMenuOp(1)
        }, 100)
    }

    function hideRightMenu() {
        setRightMenuLeft(0)
        setRightMenuTop(0)
        setMenuOp(0)
        setTimeout(() => {
            setShow('none')
        }, 350)
    }

    return (
        <div
            className='App coverScreen lightMode'
            onClick={hideRightMenu}
            onContextMenu={e => {
                showRightMenu(e)
            }}
        >
            <OnStart />
            <Header />
            <RightMenu
                left={rightMenuLeft}
                op={rightMenuOp}
                show={rightMenuShow}
                top={rightMenuTop}
                menus={menus}
            />
            <Dock />
            <Alert />
            <img src={bg} alt='background' className='coverScreen' />
            <Plugins />
        </div>
    )
}

export default App
