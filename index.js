var wallpaper       = require('wallpaper');
  , Scrapper        = require('./lib/Scrapper')
  , ImageDownloader = require('./lib/ImageDownloader');

var scrapper = new Scrapper();

scrapper
  .searchImage()
  .then(function(image) {
    var dowloader = new ImageDownloader(image);

    dowloader.download()
      .then(function() {
        console.log('finished');
      })
      .catch(function(err) {
        console.log(err);
      })
  })
  .catch(function(err) {
    console.log(err)
  })
