import { proxy } from 'valtio'

type store = {
    func: { [key: string]: (...a: any[]) => any }
}

const store: store = proxy({
    func: {
        openSettings: () => {},
        reload: () => {},
    },
})

export default store
