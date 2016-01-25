'use strict';

var _ = require("lodash");

var townTemperature = function (towns) {
    var weather = { hot: [], warm: []};

    _.forEach(towns, function(temps, townName) {
    	 if ( _.every(temps, function (temp) {
            return temp > 19;
         })){
    	 	weather.hot.push(townName);
    	 } else if ( _.some(temps, function (temp) {
            return temp > 19;
         })){
            weather.warm.push(townName);
    	 }
    });

    return weather;
};

module.exports = townTemperature;