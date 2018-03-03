const data = require('./dummyData.txt');
const mongoose = require('mongoose');
const products = require('./models/products.js');

mongoose.connect('mongodb://localhost/amazon');

const seedDb = function seedDb(dt) {
  dt.forEach((n) => {
    const obj = {
      id: n.id,
      image: n.image_url,
      name: n.name,
      category: n.category,
      overallReview: n.overallReview,
      reviewNumber: n.reviewNumber,
      price: n.price,
      isPrime: n.isPrime,
      hasReview: n.hasReview,
    }; 
    const testSaved = function testSaved(err) {
      if (err) {console.log('can not save data'); return; }
      console.log('saved data');
    };
    products.insertOne(obj, testSaved);
  });
};
seedDb(data.data);