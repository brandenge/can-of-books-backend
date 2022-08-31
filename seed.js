'use strict';

const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');

async function seed() {
  await Book.create({
    title: 'The Way of Kings',
    description: 'This is a good book.',
    author: 'Tom',
    status: true
  });
  console.log('TWoK was added.');

  await Book.create({
    title: 'Hold on to Your Kids',
    description: 'This is a good book.',
    author: 'Bob',
    status: false
  });
  console.log("HotYK was added.");

  await Book.create({
    title: 'Third Book',
    description: 'This is not such a good book.',
    author: 'Mike',
    status: false
  });
  console.log("Third Book is added.");

  mongoose.disconnect();
}

seed();
