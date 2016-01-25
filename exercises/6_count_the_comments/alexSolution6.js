'use strict';

var _ = require("lodash");

var sortComments = function (usersComments) {

	var endArray = [];
    var users = _.groupBy(usersComments, 'username');

    _.forEach(users, function(userComments, username) {

    	var countByUser = {};
    	var count = _.size(userComments);
    	countByUser.username = username;
    	countByUser.comment_count = count;
    	
    	endArray.push(countByUser);

    });

    return _.sortBy(endArray, function(o) {
    	return -o.comment_count ;
    });

};

module.exports = sortComments;