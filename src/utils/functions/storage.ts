import { EncryptStorage } from 'encrypt-storage'

const options = {
    prefix: 'AdonS-DB',
}

const encryptStorage = new EncryptStorage('AdonS-Easier-DB-crypto', options)

export default localStorage
