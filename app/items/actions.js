const changeWallpaper = require('../lib/changeWallpaper')

const quit = { label: 'Quit', type: 'normal', role: 'quit' }

const changeWallpaperItem = {
  label: 'Change wallpaper',
  type: 'normal',
  click () { return changeWallpaper() }
}

const scheduleChange = {
  label: 'change',
  submenu: [
    {
      label: 'every 1 hour',
      type: 'radio',
      every: 1,
      click (item) {
        console.log(item)
      }
    },
    {
      label: 'every 2 hour',
      type: 'radio',
      every: 1,
      click (item) { console.log(item) }
    },
    {
      label: 'Disable',
      type: 'radio',
      checked: true,
      click (item) { console.log('disabled') }
    },
  ]
}

module.exports = { quit, changeWallpaperItem, scheduleChange }
