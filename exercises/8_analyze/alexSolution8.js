'use strict';

var _ = require("lodash");

var sortingFreelancers = function (infos) {

	var totalIncome = _.reduce(infos, function(result, pair) {
            result.incomeSum += pair.income;
            return result;
        }, {incomeSum: 0});
	totalIncome = totalIncome.incomeSum;

	var numOfPeople = _.size(infos);
	var averageIncome = (totalIncome) ? totalIncome/numOfPeople : 0 ;

	var underP = _.filter(infos, function(info){
		return info.income <= averageIncome;
	});

	var overP = _.filter(infos, function(info){
		return info.income > averageIncome;
	});

	underP = _.sortBy(underP, "income");
	overP = _.sortBy(overP, "income");


    return {"average": averageIncome, "underperform": underP, "overperform": overP };

};

module.exports = sortingFreelancers;