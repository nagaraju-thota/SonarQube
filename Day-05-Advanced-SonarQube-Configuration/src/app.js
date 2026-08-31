const express = require('express');
const { getUserById } = require('./userService');

const app = express();

app.get('/user/:id', (req, res) => {
  const user = getUserById(req.params.id);
  res.json(user);
});

module.exports = app;