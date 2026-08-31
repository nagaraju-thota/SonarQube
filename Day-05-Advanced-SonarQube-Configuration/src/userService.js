const crypto = require('crypto');

// Simulated in-memory "DB"
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

function getUserById(id) {
  // Code smell: loose equality
  return users.find(u => u.id == id);
}

function hashPassword(password) {
  // Security Hotspot: weak hashing algorithm (md5)
  return crypto.createHash('md5').update(password).digest('hex');
}

function unusedFunction() {
  // Code smell: unused variable
  const temp = 42;
}

module.exports = { getUserById, hashPassword };