"use strict";

var _keystone = _interopRequireDefault(require("keystone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Types = _keystone.default.Field.Types;
/**
 * Enquiry Model
 * =============
 */

var Enquiry = new _keystone.default.List('Enquiry', {
  nocreate: true,
  noedit: true
});
Enquiry.add({
  name: {
    type: Types.Name,
    required: true
  },
  email: {
    type: Types.Email,
    required: true
  },
  phone: {
    type: String
  },
  enquiryType: {
    type: Types.Select,
    options: [{
      value: 'message',
      label: 'Just leaving a message'
    }, {
      value: 'question',
      label: 'I\'ve got a question'
    }, {
      value: 'other',
      label: 'Something else...'
    }]
  },
  message: {
    type: Types.Markdown,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
Enquiry.schema.pre('save', function (next) {
  this.wasNew = this.isNew;
  next();
});
Enquiry.schema.post('save', function () {
  if (this.wasNew) {
    this.sendNotificationEmail();
  }
});

Enquiry.schema.methods.sendNotificationEmail = function (callback) {
  if (typeof callback !== 'function') {
    callback = function callback(err) {
      if (err) {
        console.error('There was an error sending the notification email:', err);
      }
    };
  }

  if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
    console.log('Unable to send email - no mailgun credentials provided');
    return callback(new Error('could not find mailgun credentials'));
  }

  var enquiry = this;

  var brand = _keystone.default.get('brand');

  _keystone.default.list('User').model.find().where('isAdmin', true).exec(function (err, admins) {
    if (err) return callback(err);
    new _keystone.default.Email({
      templateName: 'enquiry-notification',
      transport: 'mailgun'
    }).send({
      to: admins,
      from: {
        name: 'boilerplate-cms',
        email: 'contact@boilerplate-cms.com'
      },
      subject: 'New Enquiry for boilerplate-cms',
      enquiry: enquiry,
      brand: brand
    }, callback);
  });
};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, enquiryType, createdAt';
Enquiry.register();
//# sourceMappingURL=Enquiry.js.map