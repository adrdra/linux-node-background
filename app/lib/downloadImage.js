const fs = require('fs')
const request = require('request')

const downloadImage = (image) => {
  const dir = './downloads/'
  const path = dir + image.id + '.jpg';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  return new Promise((resolve, reject) => {
    request(image.uri, (err, res, body) => {
      if (err) return reject(err);
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
      return request(image.uri)
        .pipe(fs.createWriteStream(path))
        .on('close', resolve.bind(null, path));
    })
  })
}

module.exports = downloadImage
