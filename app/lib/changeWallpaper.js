const wallpaper = require('wallpaper')
const searchImage = require('./searchImage')
const downloadImage = require('./downloadImage')

const changeWallpaper = () => {
  return searchImage()
    .then((image) => {
      return downloadImage(image)
    })
    .then((downloaded) => {
      wallpaper.set(downloaded)
      console.log('finished')
    })
    .catch((err) => console.log(err))
}

module.exports = changeWallpaper
