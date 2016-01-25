'use strict';

var _ = require("lodash");

var sortArticles = function (orders) {

	var mergedOrders = _.map( _.groupBy(orders, "article"), function(pairs, article) {
        return _.reduce(pairs, function(result, pair) {
            result.total_orders += pair.quantity;
            return result;
        }, {article: +article, total_orders: 0})
    });


    return _.sortBy(mergedOrders, function(o) {
        return -o.total_orders ;
    });

};

module.exports = sortArticles;

