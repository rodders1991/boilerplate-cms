"use strict";

var _keystone = _interopRequireDefault(require("keystone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports = module.exports = function (req, res) {
  var view = new _keystone.default.View(req, res);
  var locals = res.locals; // locals.section is used to set the currently selected
  // item in the header navigation.

  locals.section = 'home'; // Render the view

  view.render('index');
};
//# sourceMappingURL=index.js.map