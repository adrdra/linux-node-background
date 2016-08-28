const fs = require('fs')
const request = require('request')
const temp = require('temp')

const downloadImage = (image) => {
  const path = temp.path({ suffix: '.jpg' })
  return new Promise((resolve, reject) => {
    request(image.uri, (err, res, body) => {
      if (err) return reject(err);
      return request(image.uri)
        .pipe(fs.createWriteStream(path))
        .on('close', resolve.bind(null, path));
    })
  })
}

module.exports = downloadImage
