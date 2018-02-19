import keystone from 'keystone';
module.exports = {
  /** New Enquiry Notifications */
  'enquiry-notification': (req, res, callback) => {
    const Enquiry = keystone.list('Enquiry');
    const newEnquiry = new Enquiry.model({
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