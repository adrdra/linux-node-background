const { toJson } = require('unsplash-js')
const request = require('request')

const searchImage = () => {
  return getImages()
    .then(getRandomImage)
}

const getImages = () => {
  return unsplash
  .photos
  .listPhotos(1, 24, "latest")
  .then(toJson)
}

const getRandomImage = (images) => {
  const n = randomNumber(images.length)
  const image = selectedImage(images, n)
  return {
    id: image.id,
    uri: image.urls.full
  }
}

const randomNumber = (length) => {
  return Math.floor(Math.random() * length)
}

const selectedImage = (images, n) => images[n]

module.exports = searchImage;
