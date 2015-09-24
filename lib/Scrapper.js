'use strict';

var _       = require('lodash')
  , Q       = require('q')
  , cheerio = require('cheerio')
  , request = require('request');


function Scrapper() {};

/**
 * [searchImages description]
 * @return {[type]} [description]
 */
Scrapper.prototype.searchImage = function() {
  var deferred = Q.defer();

  var scrapper = this;

  request('https://unsplash.com/', function (error, res, body) {
    if (!error && res.statusCode == 200) {
      var image = scrapper.parseResponseToGetImage(body);

      deferred.resolve(image)
    }

    deferred.reject(error);
  });

  return deferred.promise;
};

/**
 * [parseResponseToGetImage description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
Scrapper.prototype.parseResponseToGetImage = function(response) {
  var $ = cheerio.load(response);

  var images = $('.photo img');
  var length = Object.keys(images).length;

  // get a random num to get a random image
  var n = Math.floor(Math.random() * length);

  return {
    uri : $(images[n]).attr('src'),
    name: $(images[n]).attr('alt')
  }
}

module.exports = Scrapper;
