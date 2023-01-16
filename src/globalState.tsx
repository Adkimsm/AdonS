import { proxy } from 'valtio'

type store = {
    func: { [key: string]: (...a: any[]) => any }
}

const store: store = proxy({
    func: {
        openSettings: () => { alert("working in progress") }
    }
})

export default store