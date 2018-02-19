"use strict";

var _keystone = _interopRequireDefault(require("keystone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  /** New Enquiry Notifications */
  'enquiry-notification': function enquiryNotification(req, res, callback) {
    var Enquiry = _keystone.default.list('Enquiry');

    var newEnquiry = new Enquiry.model({
      name: {
        first: 'Test',
        last: 'User'
      },
      email: 'contact@boilerplate-cms.com',
      phone: '+61 2 1234 5678',
      enquiryType: 'message',
      message: {
        md: 'Nice enquiry notification.'
      }
    });
    callback(null, {
      admin: 'Admin User',
      enquiry: newEnquiry,
      enquiry_url: '/keystone/enquiries/'
    });
  }
};
//# sourceMappingURL=emails.js.map