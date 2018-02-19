'use strict';

var _keystone = require('keystone');

var _keystone2 = _interopRequireDefault(_keystone);

var _middleware = require('./middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var importRoutes = _keystone2.default.importer(__dirname);

// Common Middleware
_keystone2.default.pre('routes', _middleware.initLocals);
_keystone2.default.pre('render', _middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.all('/contact', routes.views.contact);
};
//# sourceMappingURL=index.js.map