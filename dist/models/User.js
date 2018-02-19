"use strict";

var _keystone = _interopRequireDefault(require("keystone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone.default.Field.Types;
/**
 * User Model
 * ==========
 */

var User = new _keystone.default.List('User');
User.add({
  name: {
    type: Types.Name,
    required: true,
    index: true
  },
  email: {
    type: Types.Email,
    initial: true,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: Types.Password,
    initial: true,
    required: true
  }
}, 'Permissions', {
  isAdmin: {
    type: Boolean,
    label: 'Can access Keystone',
    index: true
  }
}); // Provide access to Keystone

User.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin;
});
/**
 * Registration
 */

User.defaultColumns = 'name, email, isAdmin';
User.register();
//# sourceMappingURL=User.js.map