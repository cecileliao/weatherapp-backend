const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name: String, 
    email: String,
    password: String,
});

const User = mongoose.model('users', userShema);

module.exports = User;