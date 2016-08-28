const Unsplash = require('unsplash-js').default
const unsplashConfig = require('./unsplash')

function Wallpaperz() {
  return new Promise(resolve => {
    global.fetch = require('isomorphic-fetch')
    global.scheduler = require('node-schedule')
    global.unsplash = new Unsplash(unsplashConfig)
    global.mb = require('menubar')({ tooltip: 'wallpaper' })
    return resolve()
  })
}

module.exports = { Wallpaperz }
