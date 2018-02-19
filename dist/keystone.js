"use strict";

require("./bootstrap");

var _keystone = _interopRequireDefault(require("keystone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
_keystone.default.init({
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

_keystone.default.import('models');

_keystone.default.set('locals', {
  _: require('lodash'),
  env: _keystone.default.get('env'),
  utils: _keystone.default.utils,
  editable: _keystone.default.content.editable
});

_keystone.default.set('routes', require('./routes'));

_keystone.default.set('nav', {
  enquiries: 'enquiries',
  users: 'users'
});

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
  console.log('----------------------------------------' + '\nWARNING: MISSING MAILGUN CREDENTIALS' + '\n----------------------------------------' + '\nYou have opted into email sending but have not provided' + '\nmailgun credentials. Attempts to send will fail.' + '\n\nCreate a mailgun account and add the credentials to the .env file to' + '\nset up your mailgun integration');
}

_keystone.default.start();
//# sourceMappingURL=keystone.js.map