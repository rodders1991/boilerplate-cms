'use strict';

require('./bootstrap');

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
_keystone2.default.init({
	'name': 'boilerplate-cms',
	'brand': 'boilerplate-cms',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'
});
_keystone2.default.import('models');
_keystone2.default.set('locals', {
	_: require('lodash'),
	env: _keystone2.default.get('env'),
	utils: _keystone2.default.utils,
	editable: _keystone2.default.content.editable
});
_keystone2.default.set('routes', require('./routes'));

_keystone2.default.set('nav', {
	enquiries: 'enquiries',
	users: 'users'
});

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------' + '\nWARNING: MISSING MAILGUN CREDENTIALS' + '\n----------------------------------------' + '\nYou have opted into email sending but have not provided' + '\nmailgun credentials. Attempts to send will fail.' + '\n\nCreate a mailgun account and add the credentials to the .env file to' + '\nset up your mailgun integration');
}

_keystone2.default.start();
//# sourceMappingURL=keystone.js.map