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
				this.templatePath('state'),
				this.destinationPath('states/'+this.name+'/.'),
				this
			);
		}

	},

	end: {

		instructions: function() {
			console.log(chalk.gray('State'), this.name, chalk.gray('successfully created.'), chalk.green('✔'), '\n');

			console.log(chalk.gray('index.js'));
			console.log('   ', 'mod.state(\''+this.name+'\', require(\'./states/'+this.name+'\'));');

			console.log(chalk.gray('main.scss'));
			console.log('   ', '@import \'states/'+this.name+'/styles\';');

		}

	}

});
