/*eslint-disable new-cap */
/*eslint-disable no-loop-func */
/*eslint-disable no-undef */
/*
      _                __                             ______   
     / \              |  ]                          .' ____ \  
    / _ \         .--.| |      .--.      _ .--.     | (___ \_| 
   / ___ \      / /'`\' |    / .'`\ \   [ `.-. |     _.____`.  
 _/ /   \ \_    | \__/  |    | \__. |    | | | |    | \____) | 
|____| |____|    '.__.;__]    '.__.'    [___||__]    \______.' 

 _   _           _
| | | | __ _ ___(_)_ __ __ _
| | | |/ _` |_  / | '__/ _` |
| |_| | (_| |/ /| | | | (_| |
 \___/ \__,_/___|_|_|  \__,_|

 */

 /**
  * @author Adkinsm<3020035335@qq.com>
  * @license GPL-3.0-only
  * @requires electron-Store
  * @requires electron
  * @requires dom-terminal
  * @requires pxmu
  * @copyright Adkinsm Uazira 2020.
  * @file AdonS-Easier Renderer Processs Main Js.
  *   
  */

const Store = require('electron-store')

const store = new Store()

const { ipcRenderer } = require('electron')

const Terminal = require('dom-terminal')

const pxmu = require('./libs/js/pxmu.js')

/**
 * 
 * @param {string} message 
 * @returns {false} 
 */

function showError(message) {
  ipcRenderer.send('errorInRenderer', String(message))
  return false
}

window.onerror = (e) => {
  showError(e)
}

/**
 * @this methods
 */

let methods = {
  hideElementByFade: function (element) {
    document.querySelector(element).style.animation = 'FadeOut .2s linear'
    setTimeout(() => {
      document.querySelector(element).style.opacity = 0
      document.querySelector(element).style.display = 'none'
    }, 100)
    return this
  },
  showElementByFade: function (element) {
    document.querySelector(element).style.animation = 'FadeIn .2s linear'
    document.querySelector(element).style.opacity = 1
    document.querySelector(element).style.display = 'block'
    return this
  },
  formatDate: function (str) {
    return str.replace(
      /(?<=\/|-|\.|:|\b|T)\d{1}(?=\/|-|\.|:|\b|T)/gu,
      function ($1) {
        return '0' + $1
      }
    )
  },
}

/**
 * Start Screen Animation.
 */

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('#onStart').style.animation = 'FadeOut .2s linear'
    setTimeout(() => {
      document.querySelector('#onStart').style.opacity = 0
      document.querySelector('#onStart').style.display = 'none'
      displayMessage('Welcome To AdonS,' + store.get('users.firstUser.name'))
    }, 100)
  }, 5656)
})

/**
 * LaunchPad.
 */

function showLauPad() {
  hideConsoleCentre()
  methods.showElementByFade('#laupad')
  document.querySelector('#dock_time').style.bottom = 'calc(55%)'
  document.querySelector('#dock_time').style.left = '0px'
  document.querySelector('#dock_time').style.width = '98.69%'
  document.querySelector('#dock_time').style.borderBottomLeftRadius = '0px'
  document.querySelector('#dock_time').style.borderBottomRightRadius = '0px'
  document.querySelector('#sysIco').onclick = function () {
    hideLauPad()
  }
}

function hideLauPad() {
  methods.hideElementByFade('#laupad')
  document.querySelector('#dock_time').style.bottom = '25px'
  document.querySelector('#dock_time').style.left = '466.977px'
  document.querySelector('#dock_time').style.width = '58px'
  document.querySelector('#dock_time').style.borderBottomLeftRadius = '25px'
  document.querySelector('#dock_time').style.borderBottomRightRadius = '25px'
  document.querySelector('#sysIco').onclick = function () {
    showLauPad()
  }
}

document.querySelector('#sysIco').onclick = function () {
  showLauPad()
}

document.querySelector('#showLockScrBtn').addEventListener('click', () => {
  showLockScr()
})

document.querySelector('#popSettingsBtn').addEventListener('click', () => {
  showPop('popSettings')
})

document.querySelector('#showTodoListSvg').addEventListener('click', () => {
  showTodoList()
})

/**
 * Lock Screen,Like Windows 11.
 */

function hideLockScr() {
  methods.hideElementByFade('#LockScreen')
}

function showLockScr() {
  hideLauPad()
  methods.showElementByFade('#LockScreen')
}

document.querySelector('#LockScreen').addEventListener('click', () => {
  hideLockScr()
})

/**
 * Shutdown Diaglog
 */

document.querySelector('#shutdown_btn').addEventListener('click', () => {
  pxmu
    .diaglog({
      title: {
        text: '警告！',
        color: 'red',
        fontsize: 20,
        fontweight: 'bold',
        center: false,
      },
      content: {
        text: '您确定要关闭 AdonS 吗？',
        color: '#444',
        fontsize: 14,
        fontweight: 'normal',
      },
      line: {
        solid: 1,
        color: '#eee',
      },
      btn: {
        left: {
          text: '取消',
          bg: '#fff',
          solidcolor: '#fff',
          color: '#444',
        },
        right: {
          text: '确定',
          bg: '#fff',
          solidcolor: '#fff',
          color: 'red',
        },
      },
      congif: {
        animation: 'fade',
      },
    })
    .then(function (res) {
      if (res.btn == 'right') {
        setTimeout(() => {
          hideLauPad()
          setTimeout(() => {
            window.location.href = './closing.html'
          }, 700)
        }, 600)
      }
    })
})

/**
 * To Do List
 */
;(function () {
  function newFun() {
    var addItems = document.querySelector('.add-items')
    var itemsList = document.querySelector('.plates')
    var buttons = document.querySelector('.buttons')
    var items = store.get('items') ? JSON.parse(store.get('items')) : []

    //添加item方法
    function handleSubmit(e) {
      e.preventDefault()
      var name = this.querySelector('[name=item]').value

      var item = {
        name: name,
        done: false,
      }
      items.push(item)
      store.set('items', JSON.stringify(items))
      updateList(items, itemsList)
      this.reset()
    }

    function updateList(plates = [], plateList) {
      plateList.innerHTML = plates
        .map(function (plate, i) {
          return (
            '<li><input type="checkbox" data-index="' +
            i +
            '" id="plate' +
            i +
            '" ' +
            (plate.done ? 'checked' : '') +
            ' /><label for="plate' +
            i +
            '">' +
            plate.name +
            '</label></li>'
          )
        })
        .join('')
    }

    function toggleChecked(e) {
      if (!e.target.matches('input')) return
      var item = e.target.dataset.index
      items[item].done = !items[item].done
      store.set('items', JSON.stringify(items))
      updateList(items, itemsList)
    }

    function doButtonPress(e) {
      var action = e.target.dataset.action
      switch (action) {
        case 'clear':
          items = []
          break
        case 'check':
          items.map(function (item) {
            return (item.done = true)
          })
          break
        case 'clearCheck':
          for (var key in items) {
            if (items[key].done === true) {
              pxmu.toast({
                msg: '可能会无法一次删除所有，请多次点击',
                time: 800,
              })
              items.splice(key, 1)
            }
          }
          break
        case 'uncheck':
          items.map(function (item) {
            return (item.done = false)
          })
          break
        default:
          return
      }
      store.set('items', JSON.stringify(items))
      updateList(items, itemsList)
    }

    addItems.addEventListener('submit', handleSubmit)
    itemsList.addEventListener('click', toggleChecked)
    buttons.addEventListener('click', doButtonPress)

    updateList(items, itemsList)
  }

  document.addEventListener('DOMContentLoaded', newFun)
})()

function showTodoList() {
  hideLauPad()
  methods.showElementByFade('#TodoList')
}

function hideTodoList() {
  showLauPad()
  methods.hideElementByFade('#TodoList')
}

document.querySelector('#todo_btnClose').addEventListener('click', () => {
  hideTodoList()
})

/**
 * Context Menu DIY.
 */

document.addEventListener('DOMContentLoaded', () => {
  var forRight = document.getElementById('right-menu')

  /**
   * 
   * @returns {false}
   */
  function showContextmenu() {
    var event = event || window.event
    //显示菜单
    forRight.style.display = 'block'
    setTimeout(() => {
      forRight.style.opacity = '1'
      forRight.style.transform = 'scale(1.05)'
    }, 50)
    setTimeout(() => (forRight.style.transform = 'scale(1)'), 200)
    forRight.style.left = event.pageX + 'px'
    forRight.style.top = event.pageY + 'px'
    return false
  }

  function hideContextMenu() {
    forRight.style.transform = 'scale(7.5)'
    forRight.style.opacity = '0'
    setTimeout(() => (forRight.style.display = 'none'), 250)
  }
  window.oncontextmenu = function (event) {
    showContextmenu()
  }
  //再次点击，菜单消失
  document.onclick = function () {
    hideContextMenu()
  }
})

document.querySelector('#ExitBtnInRightMenu').addEventListener('click', () => {
  let evt = document.createEvent('MouseEvents')
  evt.initEvent('click', true, true)
  document.getElementById('shutdown_btn').dispatchEvent(evt)
})

/**
 * PopUp.
 */

function showPop(thePopUp) {
  let cover1 = document.querySelector('#cover1.cover1')
  let popObj = document.querySelector('#' + thePopUp)
  cover1.style.display = 'block'
  popObj.style.display = 'block'
  popObj.style.transform = 'scale(1.1)'
  setTimeout(() => {
    cover1.style.opacity = '1'
    popObj.style.opacity = '1'
    setTimeout(() => {
      popObj.style.transform = 'scale(1.0)'
    }, 100)
  }, 50)
  cover1.style.opacity = '1'
  cover1.addEventListener('click', () => {
    cover1.style.transform = 'scale(1.05)'
    setTimeout(() => (cover1.style.transform = 'scale(1)'), 100)
  })
}

function closePop(obj) {
  let cover1 = document.querySelector('#cover1.cover1')
  cover1.style.opacity = '0'
  obj.style.opacity = '0'
  obj.style.transform = 'scale(1.1)'
  setTimeout(() => {
    cover1.style.display = 'none'
    obj.style.display = 'none'
    obj.style.transform = 'scale(0.6)'
    setTimeout(() => {
      obj.style.transform = 'scale(1.1)'
    }, 350)
  }, 350)
}

/**
 * Plugin Support.
 */

ipcRenderer.on('Plugin-Content', (_event, path, content) => {
  if (content && path) {
    console.log(content)
    let contentObj = JSON.parse(content)
    let mainJsPathInJson = contentObj.main
    var items = store.get('InstalledPlugins') ?? []
    let item = {
      name: contentObj.name,
      main: mainJsPathInJson,
      version: contentObj.version,
      description: contentObj.description,
    }
    items.push(item)
    store.set('InstalledPlugins', items)
    history.go(0)
  }
})

if (store.get('InstalledPlugins')) {
  window.addEventListener('load', () => {
    let InstalledPluginsObj = store.get('InstalledPlugins')
    InstalledPluginsObj.forEach((obj) => {
      let elementObj = document.createElement('script')
      obj.main
        ? (elementObj.src = obj.main)
        : console.log(
            'Path 为 ' + obj.name + ' 的插件没有 main 属性，无法添加至 DOM.'
          )
      elementObj.defer = true
      document.querySelector('body').append(elementObj)
    })
  })
}

/**
 * Change Wallpaper
 */

/**
 * 
 * @returns {string | false}
 */
function getWallpaperInfo() {
  let wallpaperBool = store.get('wallpaperSrc') ? true : false
  if (wallpaperBool) {
    let wallpaperSrc = store.get('wallpaperSrc')
    return String(wallpaperSrc)
  }
  return false
}

/**
 * 
 * @param {string} src 
 * @returns {string}
 */

function setWallpaper(src) {
  if (src) {
    document.querySelector('#WallpaperBackGround').src = String(src)
    store.set('wallpaperSrc', String(src))
  } else {
    showError("Can not Read Background Src of 'setWallpaper' function.")
  }
  return 'Done.'
}

document.addEventListener('DOMContentLoaded', () => {
  if (getWallpaperInfo()) {
    setWallpaper(getWallpaperInfo())
  }
})

document
  .querySelector('#wallpaperInputSummit')
  .addEventListener('click', () => {
    setWallpaper(String(document.querySelector('#wallpaperInput').value))
  })

/**
 * Terminal
 */
;(function () {
  var timeout = null
  var ter = new Terminal(
    'terminal',
    {
      welcome: 'Welcome to Adon terminal!',
      prompt: 'AdonTerminal ',
      separator: '&gt;',
    },
    {
      execute: function (cmd, args) {
        switch (cmd) {
          case 'clear':
            Terminal.clear()
            return ''

          case 'help':
            return 'Commands: clear, help, ver or version, shutdown.'

          case 'ver':
          case 'version':
            return '1.0.2'

          case 'shutdown':
            if (args && args[0] == '-t' && args[1]) {
              timeout = setTimeout(() => {
                window.close()
              }, args[1])
              return `Easier Will Close With Time Out ${args[1]} ms.`
            } else if (args && args[0] == '-a') {
              clearTimeout(timeout)
              return 'Shutdown Was Clean.'
            }
            window.location = '././closing.html'
            return 'Closed.'

          default:
            return `Command "${cmd}" Not Found.Run "help" To List All Commands.`
        }
      },
    }
  )

  ter.output('<br>Adon Terminal In Easier Version 1.0.2')
})()
document.querySelector('#terminalButton').onclick = function () {
  document.querySelector('#terminalCon').style.animation = 'FadeIn .2s linear'
  document.querySelector('#terminalCon').style.opacity = 1
  document.querySelector('#terminalCon').style.display = 'block'
  document.querySelector('#TerminalCloseBtn').onclick = function () {
    document.querySelector('#terminalCon').style.animation =
      'FadeOut .2s linear'
    setTimeout(() => {
      document.querySelector('#terminalCon').style.opacity = 0
      document.querySelector('#terminalCon').style.display = 'none'
    }, 100)
  }
}

/**
 * Message Toast
 *
 * @author LengYiBai
 * @param str {String}
 * @returns {boolean}
 */

function displayMessage(str) {
  let alert = document.querySelector('alert')
  let timer = null

  function displayS() {
    alert.style.top = '45px'
    alert.style.opacity = '1'
    alert.innerHTML = str
    timer = setTimeout(function () {
      alert.style.top = '-50px'
      alert.style.opacity = '0'
    }, 5000)
  }

  alert.addEventListener('mouseover', function () {
    clearTimeout(timer)
    console.log('用户已知晓')
  })

  alert.addEventListener('mouseleave', function () {
    console.log('用户已阅读完毕')
    setTimeout(() => {
      alert.style.top = '-50px'
      alert.style.opacity = '0'
    }, 100)
  })

  function displayC() {
    clearTimeout(timer)
    alert.style.backgroundColor = 'white'
    alert.style.color = 'black'
    let twinkle1 = setInterval(() => {
      alert.style.backgroundColor = 'rgb(51, 51, 51)'
      alert.style.color = 'white'
    }, 250)
    let twinkle2 = setInterval(() => {
      alert.style.backgroundColor = 'white'
      alert.style.color = 'black'
    }, 500)
    setTimeout(() => {
      clearInterval(twinkle1)
      clearInterval(twinkle2)
    }, 750)
  }

  displayC()
  displayS()
  return true
}

/**
 * Users.
 */

if (!store.get('users.firstUser.name')) {
  window.location.href = '././preSettings.html'
}

/**
 * Console Centre.
 */

function showConsoleCentre() {
  methods.showElementByFade('#consoleCentre')
  document.querySelector('#WallpaperBackGround').onclick = function () {
    hideConsoleCentre()
  }
  document.querySelector('hr#showConsoleCentreLine').onclick = function () {
    hideConsoleCentre()
  }
  hideLauPad()
}

/**
 * @returns {null}
 */

function hideConsoleCentre() {
  methods.hideElementByFade('#consoleCentre')
  document.querySelector('#WallpaperBackGround').onclick = function () {
    //eslint-disable-next-line no-useless-return
    return
  }
  document.querySelector('hr#showConsoleCentreLine').onclick = function () {
    showConsoleCentre()
  }
}

document.querySelector('#showConsoleCentreLine').onclick = () => {
  showConsoleCentre()
}

/**
 * No-Frame.
 */

document
  .querySelector('#dropdownHeaderReloadDevBtn')
  .addEventListener('click', () => {
    history.go(0)
  })

document
  .querySelector('#dropdownHeaderToolsDevBtn')
  .addEventListener('click', () => {
    ipcRenderer.send('openDevTools')
  })

document
  .querySelector('#dropdownHeaderUninstallAllPluginsBtn')
  .addEventListener('click', () => {
    pxmu
      .diaglog({
        title: {
          text: '警告！',
          color: 'red',
          fontsize: 20,
          fontweight: 'bold',
          center: false,
        },
        content: {
          text: '您确定要删除所有插件吗？',
          color: '#444',
          fontsize: 14,
          fontweight: 'normal',
        },
        line: {
          solid: 1,
          color: '#eee',
        },
        btn: {
          left: {
            text: '取消',
            bg: '#fff',
            solidcolor: '#fff',
            color: '#444',
          },
          right: {
            text: '确定',
            bg: '#fff',
            solidcolor: '#fff',
            color: 'red',
          },
        },
        congif: {
          animation: 'fade',
        },
      })
      .then(function (res) {
        if (res.btn == 'right') {
          store.delete('InstalledPlugins')
          history.go(0)
        }
      })
  })

document
  .querySelector('#dropdownHeaderInstallPluginsBtn')
  .addEventListener('click', () => {
    ipcRenderer.send('InstallAllPluginsFromJSONFile')
  })

/**
 * Office.
 */

;(function () {
  let vdit = new Vditor('vditor', {
    mode: 'wysiwyg',
    preview: {
      markdown: {
        mark: true,
      },
    },
  })
})()

document
  .querySelector('#markdownButton')
  .addEventListener('click', function () {
    methods.showElementByFade('#markdown')
  })

document.querySelector('#vditorCloseBtn').addEventListener('click', () => {
  methods.hideElementByFade('#markdown')
})

/**
 * Plugins Manger
 */

window.addEventListener('load', () => {
  let InstalledPluginsObj = store.get('InstalledPlugins') ?? []
  let listObj = document.querySelector('#pluginsList')
  let elementObj = null
  let deleteButtonObj = null
  for (let key in InstalledPluginsObj) {
    if (Object.hasOwnProperty.call(InstalledPluginsObj, key)) {
      document.querySelector('#DefaultLiInPlugins').style.display = 'none'
      const element = InstalledPluginsObj[key]
      elementObj = document.createElement('li')
      deleteButtonObj = document.createElement('button')
      deleteButtonObj.textContent = '卸载'
      deleteButtonObj.onclick = function () {
        console.log(element)
        console.log(
          InstalledPluginsObj.splice(
            InstalledPluginsObj.findIndex((e) => e.name === element.name),
            1
          )
        )
        store.set(
          'InstalledPlugins',
          InstalledPluginsObj.splice(
            InstalledPluginsObj.findIndex((e) => e.name === element.name),
            1
          )
        )
        elementObj.remove()
        pxmu.toast('已删除插件:' + element.name)
      }
      elementObj.textContent = element.name
      listObj.append(elementObj)
      elementObj.append(deleteButtonObj)
    }
  }
})

document.querySelector('#pluginButton').addEventListener('click', () => {
  showPop('popPlugins')
})

/**
 * Desktop Date Time
 */

;(function () {
  setInterval(() => {
    document.querySelector('#desktopHours').textContent = new Date().getHours()
    document.querySelector('#desktopMinutes').textContent =
      new Date().getMinutes()
    document.querySelector('#desktopDate').textContent = methods.formatDate(
      new Date().getMonth() + 1 + '/' + new Date().getDate()
    )
  })
  setInterval(() => {
    document.querySelector('#LockTime').textContent = methods.formatDate(
      new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ':' +
        new Date().getSeconds()
    )
  })
})()
