'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const Book = require('./models/book');

async function clear() {
  try {
    await Book.deleteMany({});
    console.log('Books cleared from DB');
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
}

clear();