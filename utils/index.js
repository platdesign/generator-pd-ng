'use strict';



var utils = module.exports = {};



utils.dasherize = function(string) {
	return string.replace(/[A-Z]/g, function(char, index) {
		return (index !== 0 ? '-' : '') + char.toLowerCase();
	});
};



