'use strict';

var Q       = require('q')
  , fs      = require('fs')
  , request = require('request');

function ImageDownloader(image) {
  this.uri  = image.uri;
  this.name = image.name
}

ImageDownloader.prototype.download = function() {
  var deferred   = Q.defer();
  var downloader = this;

  var path = 'downloads/' + downloader.name + '.jpg';

  request.head(downloader.uri, function(err, res, body){
    if (err) {
      return deferred.reject();
    }

    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(downloader.uri).pipe(fs.createWriteStream(path)).on('close', deferred.resolve);
  });

  return deferred.promise;
};

module.exports = ImageDownloader;
