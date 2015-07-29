'use strict';

/**
 * Directive: <%= directiveName %>
 */
module.exports = [function() {
	return {
		restrict: 'E',
		template: require('./template.jade'),
		replace: true,
		link: function(scope, el, attrs) {

		},
		controller: ['$scope', function($scope) {

		}]
	}
}];
