const menubar = require('menubar')
const Unsplash = require('unsplash-js').default
const unsplashConfig = require('./unsplash')

function Wallpaperz() {
  return new Promise(resolve => {
    global.fetch = require('isomorphic-fetch')
    global.unsplash = new Unsplash(unsplashConfig)
    global.mb = menubar({ tooltip: 'wallpaper' })
    return resolve()
  })
}

module.exports = { Wallpaperz }
