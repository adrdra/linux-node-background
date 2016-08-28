const { Menu } = require('electron')
const separator = require('./items/separator')
const {
  quit,
  changeWallpaperItem,
  scheduleChange
} = require('./items/actions')

const setContextMenu = () => Menu.buildFromTemplate([
  changeWallpaperItem,
  scheduleChange,
  separator,
  quit
])

module.exports = { setContextMenu }
