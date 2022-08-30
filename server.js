'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Bring in the book model
const Book = require('./models/book.js');


// Connect Mongoose to MongoDB
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is now connected.'))

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to our API!')
});

app.get('/books', getBooks);


async function getBooks(req, res, next) {
  try {
    const results = await Book.find();
    res.status(200).send(results)
  } catch(error){
    next(error)
  }
}

app.get('*', (req, res) => {
  res.status(404).send('Page not available.')
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
