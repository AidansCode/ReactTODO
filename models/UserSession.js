var mongoose = require('mongoose');

var UserSessionSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  sessionKey: {
    type: String,
    default: ''
  },
  ipAddress: {
    type: String,
    default: ''
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);
