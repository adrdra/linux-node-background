const { Menu } = require('electron')
const separator = require('./items/separator')
const { quit, changeWallpaperItem } = require('./items/actions')

const setContextMenu = () => Menu.buildFromTemplate([
  changeWallpaperItem,
  separator,
  quit
])

module.exports = { setContextMenu }
