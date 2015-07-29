'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var utils = require('../../utils');


module.exports = yeoman.generators.Base.extend({

	constructor: function() {

		yeoman.generators.Base.apply(this, arguments);

		this.argument('directiveName', {type: String, required: true});

		this._directiveName = utils.dasherize(this.directiveName);

	},

	writing: {
		app: function () {

			console.log(chalk.gray('Preparing and copying files ...'));

			this.fs.copyTpl(
				this.templatePath('directive'),
				this.destinationPath('directives/'+this._directiveName+'/.'),
				this
			);
		}

	},

	end: {

		instructions: function() {
			console.log(chalk.gray('Directive'), this.directiveName, chalk.gray('successfully created.'), chalk.green('✔'), '\n');

			console.log(chalk.gray('index.js'));

			console.log('   ', 'mod.directive(\''+this.directiveName+'\', require(\'./directives/'+this._directiveName+'\'));');

			console.log(chalk.gray('main.scss'));
			console.log('   ', '@import \'directives/'+this._directiveName+'/styles\';');

		}

	}

});
