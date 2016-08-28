const fs = require('fs')
const wallpaper = require('wallpaper')
const searchImage = require('./searchImage')
const downloadImage = require('./downloadImage')

const changeWallpaper = () => {
  return searchImage()
    .then((image) => {
      return downloadImage(image)
    })
    .then((downloaded) => {
      wallpaper
        .set(downloaded, (err) => {
          if (err) throw new Error(err);
          fs.unlink(downloaded)
          console.log('finished')
        })
    })
    .catch((err) => console.log(err))
}

module.exports = changeWallpaper
