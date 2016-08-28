const { Wallpaperz } = require('./config/setup')
const { setContextMenu } = require('./app')

new Wallpaperz()
  .then(() => {
    mb.on('ready', () => { mb.tray.setContextMenu(setContextMenu()) })
  })
