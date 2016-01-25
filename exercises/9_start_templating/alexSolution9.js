'use strict';

var _ = require("lodash");

var helloUser = function (infos) {

	var loginNum = infos.login.length;
	return _.template('Hello <%= name %> (logins: <%= num %>)')({name: infos.name, num: loginNum});

};

module.exports = helloUser;