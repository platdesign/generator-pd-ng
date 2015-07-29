'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var utils = require('../../utils');


module.exports = yeoman.generators.Base.extend({

	constructor: function() {

		yeoman.generators.Base.apply(this, arguments);

		this.argument('appName', {type: String, required: true});

		this._appName = utils.dasherize(this.appName);
	},

	writing: {
		app: function () {
			this.fs.copyTpl(
				this.templatePath('./app/**/*'),
				this.destinationPath(this._appName),
				this
			);

		},

		projectfiles: function () {

		}
	},

	install: function () {
		//this.installDependencies();
	}
});
