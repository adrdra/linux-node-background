const menubar = require('menubar')
const { Wallpaperz } = require('./config/setup')
const { setContextMenu } = require('./app')

const mb = menubar({ tooltip: 'wallpaper' })

// if (process.env.NODE_ENV == 'development') {
//   require('electron-reload')(__dirname, {
//     electron: require('electron-prebuilt')
//   })
// }

new Wallpaperz()
  .then(() => {
    mb.on('ready', () => { mb.tray.setContextMenu(setContextMenu()) })
  })
