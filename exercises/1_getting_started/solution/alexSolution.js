'use strict';

var _ = require("lodash");

var gettingStarted = function (users) {
    return _.where(users, {active: true} );
};

module.exports = gettingStarted;