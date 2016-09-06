// the users model to handle CRUD operations , like adding users, updating user ,deleting user

var mongoose = require('mongoose');

module.exports = mongoose.model('users', {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  emailID: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  createdBy: { type: String, required: true },
  modifiedBy: { type: String, required: true }
}, {
  timestamps: true
});
