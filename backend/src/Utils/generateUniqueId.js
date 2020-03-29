const crypto = require('crypto');

module.exports = function gemerateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
};
