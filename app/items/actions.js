const generateActions = require('./scheduleActions')
const changeWallpaper = require('../lib/changeWallpaper')

const quit = { label: 'Quit', type: 'normal', role: 'quit' }

const changeWallpaperItem = {
  label: 'Change wallpaper',
  type: 'normal',
  click () { return changeWallpaper() }
}

const scheduleChange = {
  label: 'change',
  submenu: generateActions()
}

module.exports = { quit, changeWallpaperItem, scheduleChange }
