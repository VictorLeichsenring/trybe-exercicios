const express = require('express');
const userBookController = require('./controllers/userBook.controller')

const app = express();

app.use(express.json());

app.get('/userbooks/:id', userBookController.getUsersBooksById);

app.get('/teste', (req, res) => {
  res.status(200)
})

module.exports = app;

