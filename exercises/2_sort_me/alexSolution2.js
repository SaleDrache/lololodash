'use strict';

var _ = require("lodash");

var sortMe = function (soldArticles) {
    return _.sortBy(soldArticles, function(o) {
    	return -o.quantity ;
    });
};

module.exports = sortMe;