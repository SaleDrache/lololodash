'use strict';

var _ = require("lodash");

var chainWords = function (words) {
    return _.chain(words)
    				.sortBy()
    				.map(function (word){
    					var newWord = word + "chained";
    					return newWord.toUpperCase();
    				})
    				.value();
};

module.exports = chainWords;