// the users model to handle CRUD operations , like adding users, updating user ,deleting user

var mongoose = require('mongoose');
module.exports = mongoose.model('users', {
  firstName	: { type: String, required: true },
  lastName	: { type: String, required: true },
  address   : { type: String  },
  mobile	  : { type: String  },
  email 	  : { type: String  },
  password	: { type: String  },
  role		  : { type: String  },
  createdBy	: { type: String, default: 'logInUser' },
  modifiedBy: { type: String, default: 'logInUser' },
  createdAt : { type: Date, default: Date.now },
  modifiedAt: { type: Date, default: Date.now }
});
