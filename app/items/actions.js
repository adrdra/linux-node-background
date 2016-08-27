const changeWallpaper = require('../lib/changeWallpaper')

const quit = { label: 'Quit', type: 'normal', role: 'quit' }

const changeWallpaperItem = {
  label: 'Change wallpaper',
  type: 'normal',
  click () { return changeWallpaper() }
}

module.exports = { quit, changeWallpaperItem }
