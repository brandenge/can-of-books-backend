'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Bring in the book model
const Book = require('./models/book.js');
const { response } = require('express');

// Connect Mongoose to MongoDB
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongoose is now connected.'));

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to our API!');
});

app.get('/books', getBooks);

async function getBooks(req, res, next) {
  try {
    const results = await Book.find();
    res.status(200).send(results);
  } catch(error) {
    next(error);
  }
}

app.post('/books', postBook);

async function postBook(req, res, next) {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).send(newBook);
  } catch (error) {
    next(error);
  }
}

app.put('/books/:bookid', putBook);

async function putBook(req, res, next) {
  const id = req.params.bookid;
  try {
    const data = req.body;
    const updateBook = await Book.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    res.status(201).send(updateBook);
  } catch (error) {
    next(error);
  }
}

app.delete('/books/:bookid', deleteBook);

async function deleteBook(req, res, next) {
  const id = req.params.bookid;
  try {
    await Book.findByIdAndDelete(id);
    res.status(204).send('success!');
  } catch (error) {
    next(error);
  }
}

app.get('*', (req, res) => {
  res.status(404).send('Page not available.');
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
