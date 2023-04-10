const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://cecileliao:CapsuleBatch77@capsule.ytksgmn.mongodb.net/weatherpart4';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
