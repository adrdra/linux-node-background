const fs = require('fs')
const wallpaper = require('wallpaper')
const downloadImage = require('./downloadImage')
const searchImage = require('./searchImage')

const changeWallpaper = () => {
  return searchImage()
    .then((image) => {
      return downloadImage(image)
    })
    .then((downloaded) => {
      wallpaper
        .set(downloaded, (err) => {
          if (err) throw new Error(err)
          console.log('Background changed !')
          fs.unlink(downloaded)
        })
    })
    .catch((err) => console.log(err))
}

module.exports = changeWallpaper
