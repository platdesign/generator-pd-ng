'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var utils = require('../../utils');


module.exports = yeoman.generators.Base.extend({

	constructor: function() {

		yeoman.generators.Base.apply(this, arguments);

		this.argument('name', {type: String, required: true});

		this._name = utils.dasherize(this.name);

	},

	writing: {
		app: function () {

			console.log(chalk.gray('Preparing and copying files ...'));

			this.fs.copyTpl(
				this.templatePath('provider'),
				this.destinationPath('providers/'+this._name+'/.'),
				this
			);
		}

	},

	end: {

		instructions: function() {
			console.log(chalk.gray('Provider'), this.name, chalk.gray('successfully created.'), chalk.green('✔'), '\n');

			console.log(chalk.gray('index.js'));

			console.log('   ', 'mod.provider(\''+this.name+'\', require(\'./providers/'+this._name+'\'));');

		}

	}

});
