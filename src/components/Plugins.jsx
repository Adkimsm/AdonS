import React from 'react'
const { PythonShell } = require('python-shell')
import path from "path"

const electronStore = require('electron-store')
const store = new electronStore()

let plugins = store.get('plugins') ?? globalThis.plugins ?? []

let pythonPlugins = store.get("pythonPlugins") ?? globalThis.pythonPlugins ?? []

let pyShell = void 0

export default function () {
    return (
        <>
            {plugins?.map((plugin, index) => {
                return <script src={plugin} key={index} />
            })}
            { pythonPlugins.map((plugin) => {
                {pyShell = new PythonShell(plugin, {
                    pythonPath: path.resolve('python', 'python.exe')
                })}
                {console.log(path.resolve('python', 'python.exe'))}
                {pyShell.send('created')}

                {pyShell.on('message', function (message) {
                        eval(message.toString())
                })}

                {pyShell.end(function (err, code, signal) {
                    if (err) throw err
                    console.log('The exit code was: ' + code)
                    console.log('The exit signal was: ' + signal)
                    console.log('finished')
                })}
            })}
        </>
    )
}
