"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireUser = exports.flashMessages = exports.initLocals = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	Initialises the standard view locals
*/
var initLocals = function initLocals(req, res, next) {
  res.locals.navLinks = [{
    label: 'Home',
    key: 'home',
    href: '/'
  }, {
    label: 'Contact',
    key: 'contact',
    href: '/contact'
  }];
  res.locals.user = req.user;
  next();
};
/**
	Fetches and clears the flashMessages before a view is rendered
*/


exports.initLocals = initLocals;

var flashMessages = function flashMessages(req, res, next) {
  var flashMessages = {
    info: req.flash('info'),
    success: req.flash('success'),
    warning: req.flash('warning'),
    error: req.flash('error')
  };
  res.locals.messages = _lodash.default.some(flashMessages, function (msgs) {
    return msgs.length;
  }) ? flashMessages : false;
  next();
};
/**
	Prevents people from accessing protected pages when they're not signed in
 */


exports.flashMessages = flashMessages;

var requireUser = function requireUser(req, res, next) {
  if (!req.user) {
    req.flash('error', 'Please sign in to access this page.');
    res.redirect('/keystone/signin');
  } else {
    next();
  }
};

exports.requireUser = requireUser;
//# sourceMappingURL=middleware.js.map