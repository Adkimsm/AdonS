const Store = require('electron-store')

const store = new Store()

const { ipcRenderer } = require('electron')

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#nextWelcome').onclick = () => {
    setTimeout(() => {
      document.querySelector('#welcomeContent').style.animation =
        'FadeOut .2s linear'
      document.querySelector('#settingsContent').style.animation =
        'FadeIn .2s linear'
      setTimeout(() => {
        document.querySelector('#welcomeContent').style.opacity = 0
        document.querySelector('#welcomeContent').style.display = 'none'
        document.querySelector('#welcomeLi').classList.remove('focus')
        document.querySelector('#preLi').classList.add('focus')
        setTimeout(() => {
          document.querySelector('#settingsContent').style.opacity = 1
          document.querySelector('#settingsContent').style.display = 'block'
        }, 300)
      }, 100)
    }, 500)
  }

  document.querySelector('#nextSettings').onclick = () => {
    let userName = document.querySelector('#userNameInput').value
    if (!userName) {
      ipcRenderer.send('errorInRenderer', '必须填写有效用户名')
      return false
    }
    setTimeout(() => {
      document.querySelector('#settingsContent').style.animation =
        'FadeOut .2s linear'
      document.querySelector('#okContent').style.animation = 'FadeIn .2s linear'
      setTimeout(() => {
        document.querySelector('#settingsContent').style.opacity = 0
        document.querySelector('#settingsContent').style.display = 'none'
        document.querySelector('#preLi').classList.remove('focus')
        document.querySelector('#okLi').classList.add('focus')
        setTimeout(() => {
          document.querySelector('#okContent').style.opacity = 1
          document.querySelector('#okContent').style.display = 'block'
        }, 300)
      }, 100)
    }, 500)
    store.set('users.firstUser.name', userName)
  }

  document.querySelector('#nextOk').onclick = () => {
    window.location.href = '././index.html'
  }
})
